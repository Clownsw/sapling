"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8316],{28316:(t,n,_)=>{let r;_.r(n),_.d(n,{JsDag:()=>N,JsIdDag:()=>R,JsIdSet:()=>U,JsSet:()=>L,default:()=>T,drawdag:()=>S,initSync:()=>J,setup:()=>x,withTracing:()=>A}),t=_.hmd(t);const e=new Array(32).fill(void 0);function i(t){return e[t]}e.push(void 0,null,!0,!1);let o=e.length;function a(t){const n=i(t);return function(t){t<36||(e[t]=o,o=t)}(t),n}let s=0,d=new Uint8Array;function c(){return 0===d.byteLength&&(d=new Uint8Array(r.memory.buffer)),d}const w=new TextEncoder("utf-8"),g="function"==typeof w.encodeInto?function(t,n){return w.encodeInto(t,n)}:function(t,n){const _=w.encode(t);return n.set(_),{read:t.length,written:_.length}};function b(t,n,_){if(void 0===_){const _=w.encode(t),r=n(_.length);return c().subarray(r,r+_.length).set(_),s=_.length,r}let r=t.length,e=n(r);const i=c();let o=0;for(;o<r;o++){const n=t.charCodeAt(o);if(n>127)break;i[e+o]=n}if(o!==r){0!==o&&(t=t.slice(o)),e=_(e,r,r=o+3*t.length);const n=c().subarray(e+o,e+r);o+=g(t,n).written}return s=o,e}function f(t){return null==t}let p=new Int32Array;function u(){return 0===p.byteLength&&(p=new Int32Array(r.memory.buffer)),p}const l=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function y(t,n){return l.decode(c().subarray(t,t+n))}function h(t){o===e.length&&e.push(e.length+1);const n=o;return o=e[n],e[n]=t,n}l.decode();let k=new Float64Array;function v(t){const n=typeof t;if("number"==n||"boolean"==n||null==t)return""+t;if("string"==n)return'"'+t+'"';if("symbol"==n){const n=t.description;return null==n?"Symbol":"Symbol("+n+")"}if("function"==n){const n=t.name;return"string"==typeof n&&n.length>0?"Function("+n+")":"Function"}if(Array.isArray(t)){const n=t.length;let _="[";n>0&&(_+=v(t[0]));for(let r=1;r<n;r++)_+=", "+v(t[r]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(!(_.length>1))return toString.call(t);if(r=_[1],"Object"==r)try{return"Object("+JSON.stringify(t)+")"}catch(e){return"Object"}return t instanceof Error?t.name+": "+t.message+"\n"+t.stack:r}function j(t,n){if(!(t instanceof n))throw new Error("expected instance of "+n.name);return t.ptr}let m=32;function A(t,n){try{const o=r.__wbindgen_add_to_stack_pointer(-16);r.withTracing(o,function(t){if(1==m)throw new Error("out of js stack");return e[--m]=t,m}(t),!f(n),f(n)?0:n);var _=u()[o/4+0],i=u()[o/4+1];if(u()[o/4+2])throw a(i);return a(_)}finally{r.__wbindgen_add_to_stack_pointer(16),e[m++]=void 0}}function S(t){const n=b(t,r.__wbindgen_malloc,r.__wbindgen_realloc),_=s;return a(r.drawdag(n,_))}function x(){r.setup()}function I(t,n){try{return t.apply(this,n)}catch(_){r.__wbindgen_exn_store(h(_))}}function O(t,n){return c().subarray(t/1,t/1+n)}class N{static __wrap(t){const n=Object.create(N.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_jsdag_free(t)}constructor(){const t=r.jsdag_new();return N.__wrap(t)}addHeads(t,n){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_addHeads(e,this.ptr,h(t),h(n));var _=u()[e/4+0];if(u()[e/4+1])throw a(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}render(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_render(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return a(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}renderSubset(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_renderSubset(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}parentNames(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16),i=b(t,r.__wbindgen_malloc,r.__wbindgen_realloc),o=s;r.jsdag_parentNames(e,this.ptr,i,o);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}all(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_all(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return L.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}mainGroup(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_mainGroup(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return L.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}dirty(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_dirty(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return L.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}sort(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_sort(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}ancestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_ancestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}parents(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_parents(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}firstAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_firstAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}heads(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_heads(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}children(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_children(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}roots(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_roots(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}merges(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_merges(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}gca(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_gca(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}commonAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_commonAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}headsAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_headsAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}range(t,n){try{const i=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),j(n,L),r.jsdag_range(i,this.ptr,t.ptr,n.ptr);var _=u()[i/4+0],e=u()[i/4+1];if(u()[i/4+2])throw a(e);return L.__wrap(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}only(t,n){try{const i=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),j(n,L),r.jsdag_only(i,this.ptr,t.ptr,n.ptr);var _=u()[i/4+0],e=u()[i/4+1];if(u()[i/4+2])throw a(e);return L.__wrap(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}descendants(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsdag_descendants(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}reachableRoots(t,n){try{const i=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),j(n,L),r.jsdag_reachableRoots(i,this.ptr,t.ptr,n.ptr);var _=u()[i/4+0],e=u()[i/4+1];if(u()[i/4+2])throw a(e);return L.__wrap(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}idDag(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_idDag(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return R.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}vertexId(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16),i=b(t,r.__wbindgen_malloc,r.__wbindgen_realloc),o=s;r.jsdag_vertexId(e,this.ptr,i,o);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}vertexName(t){try{const d=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_vertexName(d,this.ptr,t);var n=u()[d/4+0],_=u()[d/4+1],e=u()[d/4+2],i=u()[d/4+3],o=n,s=_;if(i)throw o=0,s=0,a(e);return y(o,s)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(o,s)}}convtainsVertexIdLocally(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_convtainsVertexIdLocally(e,this.ptr,h(t));var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}convtainsVertexNameLocally(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsdag_convtainsVertexNameLocally(e,this.ptr,h(t));var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class R{static __wrap(t){const n=Object.create(R.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_jsiddag_free(t)}parentIds(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsiddag_parentIds(e,this.ptr,t);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return a(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}all(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsiddag_all(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return U.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}mainGroup(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsiddag_mainGroup(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return U.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}ancestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_ancestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}parents(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_parents(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}firstAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_firstAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}heads(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_heads(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}children(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_children(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}roots(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_roots(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}merges(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_merges(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}gca(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_gca(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}commonAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_commonAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}headsAncestors(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_headsAncestors(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}range(t,n){try{const i=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),j(n,U),r.jsiddag_range(i,this.ptr,t.ptr,n.ptr);var _=u()[i/4+0],e=u()[i/4+1];if(u()[i/4+2])throw a(e);return U.__wrap(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}descendants(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_descendants(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}segments(t,n){try{const i=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsiddag_segments(i,this.ptr,t.ptr,n);var _=u()[i/4+0],e=u()[i/4+1];if(u()[i/4+2])throw a(e);return a(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class U{static __wrap(t){const n=Object.create(U.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_jsidset_free(t)}constructor(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_new(e,h(t));var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}toString(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_toString(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];return y(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}toJSON(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_toJSON(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return a(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}count(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_count(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return t>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}skip(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_skip(e,this.ptr,t);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}take(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsidset_take(e,this.ptr,t);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}union(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsidset_union(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}intersection(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsidset_intersection(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}difference(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,U),r.jsidset_difference(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return U.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}class L{static __wrap(t){const n=Object.create(L.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_jsset_free(t)}constructor(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_new(e,h(t));var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}toString(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_toString(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];return y(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}toJSON(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_toJSON(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return a(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}count(){try{const _=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_count(_,this.ptr);var t=u()[_/4+0],n=u()[_/4+1];if(u()[_/4+2])throw a(n);return t>>>0}finally{r.__wbindgen_add_to_stack_pointer(16)}}skip(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_skip(e,this.ptr,t);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}take(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);r.jsset_take(e,this.ptr,t);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}union(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsset_union(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}intersection(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsset_intersection(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}difference(t){try{const e=r.__wbindgen_add_to_stack_pointer(-16);j(t,L),r.jsset_difference(e,this.ptr,t.ptr);var n=u()[e/4+0],_=u()[e/4+1];if(u()[e/4+2])throw a(_);return L.__wrap(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}function W(){const n={wbg:{}};return n.wbg.__wbindgen_object_drop_ref=function(t){a(t)},n.wbg.__wbindgen_is_null=function(t){return null===i(t)},n.wbg.__wbindgen_is_undefined=function(t){return void 0===i(t)},n.wbg.__wbindgen_string_get=function(t,n){const _=i(n),e="string"==typeof _?_:void 0;var o=f(e)?0:b(e,r.__wbindgen_malloc,r.__wbindgen_realloc),a=s;u()[t/4+1]=a,u()[t/4+0]=o},n.wbg.__wbindgen_error_new=function(t,n){return h(new Error(y(t,n)))},n.wbg.__wbindgen_string_new=function(t,n){return h(y(t,n))},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return h(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const _=b(i(n).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),e=s;u()[t/4+1]=e,u()[t/4+0]=_},n.wbg.__wbg_error_f851667af71bcfc6=function(t,n){try{console.error(y(t,n))}finally{r.__wbindgen_free(t,n)}},n.wbg.__wbindgen_number_new=function(t){return h(t)},n.wbg.__wbindgen_object_clone_ref=function(t){return h(i(t))},n.wbg.__wbindgen_is_object=function(t){const n=i(t);return"object"==typeof n&&null!==n},n.wbg.__wbindgen_jsval_loose_eq=function(t,n){return i(t)==i(n)},n.wbg.__wbindgen_boolean_get=function(t){const n=i(t);return"boolean"==typeof n?n?1:0:2},n.wbg.__wbindgen_number_get=function(t,n){const _=i(n),e="number"==typeof _?_:void 0;(0===k.byteLength&&(k=new Float64Array(r.memory.buffer)),k)[t/8+1]=f(e)?0:e,u()[t/4+0]=!f(e)},n.wbg.__wbg_set_20cbc34131e76824=function(t,n,_){i(t)[a(n)]=a(_)},n.wbg.__wbg_String_91fba7ded13ba54c=function(t,n){const _=b(String(i(n)),r.__wbindgen_malloc,r.__wbindgen_realloc),e=s;u()[t/4+1]=e,u()[t/4+0]=_},n.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return I((function(t,n,_){i(t).randomFillSync(O(n,_))}),arguments)},n.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return I((function(t,n){i(t).getRandomValues(i(n))}),arguments)},n.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(t){return h(i(t).crypto)},n.wbg.__wbg_process_038c26bf42b093f8=function(t){return h(i(t).process)},n.wbg.__wbg_versions_ab37218d2f0b24a8=function(t){return h(i(t).versions)},n.wbg.__wbg_node_080f4b19d15bc1fe=function(t){return h(i(t).node)},n.wbg.__wbindgen_is_string=function(t){return"string"==typeof i(t)},n.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return I((function(){return h(t.require)}),arguments)},n.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(t){return h(i(t).msCrypto)},n.wbg.__wbg_get_57245cc7d7c7619d=function(t,n){return h(i(t)[n>>>0])},n.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(t){return i(t).length},n.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return h(new Array)},n.wbg.__wbindgen_is_function=function(t){return"function"==typeof i(t)},n.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(t,n){return h(new Function(y(t,n)))},n.wbg.__wbg_new_268f7b7dd3430798=function(){return h(new Map)},n.wbg.__wbg_next_579e583d33566a86=function(t){return h(i(t).next)},n.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return I((function(t){return h(i(t).next())}),arguments)},n.wbg.__wbg_done_1b73b0672e15f234=function(t){return i(t).done},n.wbg.__wbg_value_1ccc36bc03462d71=function(t){return h(i(t).value)},n.wbg.__wbg_iterator_6f9d4f28845f426c=function(){return h(Symbol.iterator)},n.wbg.__wbg_get_765201544a2b6869=function(){return I((function(t,n){return h(Reflect.get(i(t),i(n)))}),arguments)},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return I((function(t,n){return h(i(t).call(i(n)))}),arguments)},n.wbg.__wbg_new_0b9bfdd97583284e=function(){return h(new Object)},n.wbg.__wbg_self_6d479506f72c6a71=function(){return I((function(){return h(self.self)}),arguments)},n.wbg.__wbg_window_f2557cc78490aceb=function(){return I((function(){return h(window.window)}),arguments)},n.wbg.__wbg_globalThis_7f206bda628d5286=function(){return I((function(){return h(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_ba75c50d1cf384f4=function(){return I((function(){return h(_.g.global)}),arguments)},n.wbg.__wbg_set_a68214f35c417fa9=function(t,n,_){i(t)[n>>>0]=a(_)},n.wbg.__wbg_isArray_27c46c67f498e15d=function(t){return Array.isArray(i(t))},n.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(t){let n;try{n=i(t)instanceof ArrayBuffer}catch{n=!1}return n},n.wbg.__wbg_call_168da88779e35f61=function(){return I((function(t,n,_){return h(i(t).call(i(n),i(_)))}),arguments)},n.wbg.__wbg_set_933729cf5b66ac11=function(t,n,_){return h(i(t).set(i(n),i(_)))},n.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(t){return Number.isSafeInteger(i(t))},n.wbg.__wbg_entries_65a76a413fc91037=function(t){return h(Object.entries(i(t)))},n.wbg.__wbg_buffer_3f3d764d4747d564=function(t){return h(i(t).buffer)},n.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be=function(t,n,_){return h(new Uint8Array(i(t),n>>>0,_>>>0))},n.wbg.__wbg_new_8c3f0052272a457a=function(t){return h(new Uint8Array(i(t)))},n.wbg.__wbg_set_83db9690f9353e79=function(t,n,_){i(t).set(i(n),_>>>0)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(t){return i(t).length},n.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(t){let n;try{n=i(t)instanceof Uint8Array}catch{n=!1}return n},n.wbg.__wbg_newwithlength_f5933855e4f48a19=function(t){return h(new Uint8Array(t>>>0))},n.wbg.__wbg_subarray_58ad4efbb5bcb886=function(t,n,_){return h(i(t).subarray(n>>>0,_>>>0))},n.wbg.__wbindgen_debug_string=function(t,n){const _=b(v(i(n)),r.__wbindgen_malloc,r.__wbindgen_realloc),e=s;u()[t/4+1]=e,u()[t/4+0]=_},n.wbg.__wbindgen_throw=function(t,n){throw new Error(y(t,n))},n.wbg.__wbindgen_memory=function(){return h(r.memory)},n}function F(t,n){return r=t.exports,E.__wbindgen_wasm_module=n,k=new Float64Array,p=new Int32Array,d=new Uint8Array,r.__wbindgen_start(),r}function J(t){const n=W();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));return F(new WebAssembly.Instance(t,n),t)}async function E(t){void 0===t&&(t=new URL(_(4787),_.b));const n=W();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:e}=await async function(t,n){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,n)}catch(_){if("application/wasm"==t.headers.get("Content-Type"))throw _;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",_)}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,n)}{const _=await WebAssembly.instantiate(t,n);return _ instanceof WebAssembly.Instance?{instance:_,module:t}:_}}(await t,n);return F(r,e)}const T=E},4787:(t,n,_)=>{t.exports=_.p+"3692a010e28fca22.wasm"}}]);