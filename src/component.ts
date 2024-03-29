/**
 * Copyright Trian Damai 2022
 * triandamai@gmail.com
 * 
*/
import { BaseComponent, Fragment, init, listen } from "./internal/Component";
import { append, element, setText } from "./internal/dom";
import { safe_not_equal } from "./internal/utils";
function instance ($$self:any,$$props:any,$$invalidate:any):any[]{
//todo remove this line
    $$self
    $$props

    let count=0

    function handle_click(){
        $$invalidate(0,(count+=1))
    }
    return[count,handle_click]
}

function create_fragment(ctx:any[]):Fragment{
    let btn:HTMLElement
    let span:HTMLElement
    return{
        create() {
            btn = element("button")
            setText("Klik",btn)
            span = element("span")
            setText(ctx[0],span)

            listen(btn,'click',ctx[1])
        },
        mount(target, anchor) {
            //todo remove this line
            anchor
            
            append(target,btn)
            append(target,span)
        },
        update(ctx, dirty) {
           
            if(dirty[0] != undefined || dirty[0] != null){
                console.log(span)
                setText(ctx[0],span)
            }
        },
        claim(parent) {
            
        },
        destroy() {
            
        },
    }
}

export class Tes extends BaseComponent{
    constructor(options:any){
        super()
        init(this,options,instance,create_fragment,safe_not_equal)
    }
}