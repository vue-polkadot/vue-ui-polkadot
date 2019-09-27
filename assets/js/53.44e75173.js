(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{278:function(t,e,n){"use strict";n.r(e);var s=n(38),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("router-link",{attrs:{to:"/vue-settings/"}},[t._v("vue-polkadot UI Libraries")]),t._v(" › "),n("router-link",{attrs:{to:"/vue-settings/globals.html"}},[t._v("Globals")]),t._v(" › "),n("router-link",{attrs:{to:"/vue-settings/modules/_defaults_endpoints_.html"}},[t._v('"defaults/endpoints"')])],1),t._v(" "),n("h1",{attrs:{id:"external-module-defaults-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-module-defaults-endpoints","aria-hidden":"true"}},[t._v("#")]),t._v(' External module: "defaults/endpoints"')]),t._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[t._v("#")]),t._v(" Index")]),t._v(" "),n("h3",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/vue-settings/modules/_defaults_endpoints_.html#const-endpoints"}},[t._v("ENDPOINTS")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/vue-settings/modules/_defaults_endpoints_.html#const-endpoint_default"}},[t._v("ENDPOINT_DEFAULT")])],1)]),t._v(" "),n("h2",{attrs:{id:"variables-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("h3",{attrs:{id:"const-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-endpoints","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("Const")]),t._v(" ENDPOINTS")]),t._v(" "),n("p",[t._v("• "),n("strong",[t._v("ENDPOINTS")]),t._v(": "),n("em",[n("router-link",{attrs:{to:"/vue-settings/modules/_types_.html#option"}},[t._v("Option")]),t._v("[]")],1),t._v(" =  ORDER_CHAINS.reduce((endpoints: Option[], chainName): Option[] => {\nconst { chainDisplay, logo, type } = CHAIN_INFO[chainName];")]),t._v(" "),n("p",[t._v("return ORDER_PROVIDERS.reduce((endpoints: Option[], providerName): Option[] => {\nconst { providerDisplay, nodes } = PROVIDERS[providerName];\nconst wssUrl = nodes[chainName];")]),t._v(" "),n("pre",[n("code",[t._v("if (wssUrl) {\n  endpoints.push({\n    info: logo,\n    text: `${chainDisplay} (${type}, hosted by ${providerDisplay}}`,\n    value: wssUrl\n  });\n}\n\nreturn endpoints;\n")])]),t._v(" "),n("p",[t._v("}, endpoints);\n}, [])")]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/vue-polkadot/vue-ui/blob/b6476aa/packages/vue-settings/src/defaults/endpoints.ts#L88",target:"_blank",rel:"noopener noreferrer"}},[t._v("defaults/endpoints.ts:88"),n("OutboundLink")],1)])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"const-endpoint-default"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-endpoint-default","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("Const")]),t._v(" ENDPOINT_DEFAULT")]),t._v(" "),n("p",[t._v("• "),n("strong",[t._v("ENDPOINT_DEFAULT")]),t._v(": "),n("em",[t._v("undefined | string")]),t._v(" =  isPolkadot\n? PROVIDERS.parity.nodes.kusama\n: PROVIDERS.parity.nodes.flamingFir")]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/vue-polkadot/vue-ui/blob/b6476aa/packages/vue-settings/src/defaults/endpoints.ts#L84",target:"_blank",rel:"noopener noreferrer"}},[t._v("defaults/endpoints.ts:84"),n("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=a.exports}}]);