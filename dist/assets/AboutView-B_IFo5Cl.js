import { _export_sfc, importShared, __tla as __tla_0 } from "./index-CuPHXv-d.js";
let AboutView;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const _sfc_main = {};
    const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
    const _hoisted_1 = {
        class: "about"
    };
    const _hoisted_2 = _createElementVNode("h1", null, "This is an about page", -1);
    const _hoisted_3 = [
        _hoisted_2
    ];
    function _sfc_render(_ctx, _cache) {
        return (_openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_3));
    }
    AboutView = _export_sfc(_sfc_main, [
        [
            "render",
            _sfc_render
        ]
    ]);
});
export { AboutView as default, __tla };
