(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1262:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(148);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1286)],module)}.call(this,__webpack_require__(1263)(module))},1286:function(module,exports,__webpack_require__){var map={"./App.stories.js":1354};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1286},1330:function(module,exports,__webpack_require__){},1354:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var defineProperty=__webpack_require__(202),react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(149),lib=__webpack_require__(203),lib_default=__webpack_require__.n(lib),CustomMarker_CustomMarker=(__webpack_require__(1330),function CustomMarker(props){var name=props.name,color=props.color;return react_default.a.createElement("div",{onClick:function handleClick(e){e.preventDefault(),props.onClick&&props.onClick(e)}},react_default.a.createElement("div",{className:"pin bounce",style:{backgroundColor:color,cursor:"pointer"},title:name}),react_default.a.createElement("div",{className:"pulse"}),react_default.a.createElement("div",{style:{backgroundColor:"white",zIndex:100,fontSize:30}}))});CustomMarker_CustomMarker.__docgenInfo={description:"",methods:[],displayName:"CustomMarker"};var components_CustomMarker=CustomMarker_CustomMarker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CustomMarker.js"]={name:"CustomMarker",docgenInfo:CustomMarker_CustomMarker.__docgenInfo,path:"src/components/CustomMarker.js"});var _parameters,addon_knobs_dist=__webpack_require__(204),client=__webpack_require__(148),preview=__webpack_require__(470),addon_a11y_dist=(__webpack_require__(1341),__webpack_require__(471));__webpack_require__.d(__webpack_exports__,"Map",(function(){return Map})),__webpack_require__.d(__webpack_exports__,"MapMarker",(function(){return MapMarker}));__webpack_require__(189).withSource;var addSourceDecorator=__webpack_require__(189).addSource,__SOURCE_PREFIX__=(__webpack_require__(189).withSource,addSourceDecorator=__webpack_require__(189).addSource,"/Users/pang/Desktop/20-1/20-1 lab/react/react-map/src"),__STORY__='import React from "react";\nimport PropTypes from \'prop-types\';\nimport { action } from \'@storybook/addon-actions\';\nimport GoogleMap, { infoWindow } from "google-map-react";\nimport CustomMarker from "./components/CustomMarker";\nimport { withKnobs, text, color, number } from "@storybook/addon-knobs";\nimport { addParameters } from \'@storybook/react\';\nimport { INITIAL_VIEWPORTS } from \'@storybook/addon-viewport\';\nimport { addDecorator } from \'@storybook/react\';\nimport { withConsole } from \'@storybook/addon-console\';\nimport { withA11y } from \'@storybook/addon-a11y\';\n\n\n\n\nexport default {\n  title: "Map",\n  component: GoogleMap,\n  decorators: [withA11y, withKnobs],\n  parameters: {\n    backgrounds: [\n      { name: \'twitter\', value: \'#00aced\', default: true },\n      { name: \'facebook\', value: \'#3b5998\' },\n    ],\n    a11y: {\n      // optional selector which element to inspect\n      element: \'#root\',\n      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)\n      config: {},\n      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)\n      options: {},\n    },\n  }\n};\n\naddParameters({\n  viewport: {\n    viewports: INITIAL_VIEWPORTS,\n  },\n});\n\n\n\nexport const Map = () => (\n  \n\n  \n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n    ></GoogleMap>\n  </div>\n);\n\nexport const MapMarker = () => {\n  const defaultValue1 = \'#ff00ff\';\n  const defaultValue2 = \'#00ffff\';\n\nconst value1 = color(\'Color\', defaultValue1, \'GROUP-ID1\');\nconst value2 = color(\'Color\', defaultValue2, \'GROUP-ID2\');\n  return(\n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n      onClick={action("map-clicked")}\n    >\n      <CustomMarker\n        id="-1"\n        key="-1"\n        lat="-17.942100"\n        lng="177.742345"\n        color={`${value1}`}\n        disabled="true"\n        onClick={action("marker1-clicked")}\n      />\n      <CustomMarker\n        id="0"\n        key="0"\n        lat="-17.842100"\n        lng="178.142345"\n        color={`${value2}`}\n        disabled="false"\n        onClick={action("marker2-clicked")}\n      />\n    </GoogleMap>\n  </div>\n  )\n};\n\n\n',__ADDS_MAP__={"map--map":{startLoc:{col:19,line:44},endLoc:{col:1,line:55},startBody:{col:19,line:44},endBody:{col:1,line:55}},"map--map-marker":{startLoc:{col:25,line:57},endLoc:{col:1,line:92},startBody:{col:25,line:57},endBody:{col:1,line:92}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={title:"Map",component:lib_default.a,decorators:[addon_a11y_dist.withA11y,addon_knobs_dist.withKnobs],parameters:(_parameters={storySource:{source:'\n\n// @ts-nocheck\n// @ts-ignore\nvar withSourceLoader = require(\'@storybook/source-loader/preview\').withSource;\n// @ts-ignore\nvar addSourceDecorator = require("@storybook/source-loader/preview").addSource;\n// @ts-ignore\nvar __SOURCE_PREFIX__ = "/Users/pang/Desktop/20-1/20-1 lab/react/react-map/src";\n// @ts-ignore\nvar __STORY__ = "import React from \\"react\\";\\nimport PropTypes from \'prop-types\';\\nimport { action } from \'@storybook/addon-actions\';\\nimport GoogleMap, { infoWindow } from \\"google-map-react\\";\\nimport CustomMarker from \\"./components/CustomMarker\\";\\nimport { withKnobs, text, color, number } from \\"@storybook/addon-knobs\\";\\nimport { addParameters } from \'@storybook/react\';\\nimport { INITIAL_VIEWPORTS } from \'@storybook/addon-viewport\';\\nimport { addDecorator } from \'@storybook/react\';\\nimport { withConsole } from \'@storybook/addon-console\';\\nimport { withA11y } from \'@storybook/addon-a11y\';\\n\\n\\n\\n\\nexport default {\\n  title: \\"Map\\",\\n  component: GoogleMap,\\n  decorators: [withA11y, withKnobs],\\n  parameters: {\\n    backgrounds: [\\n      { name: \'twitter\', value: \'#00aced\', default: true },\\n      { name: \'facebook\', value: \'#3b5998\' },\\n    ],\\n    a11y: {\\n      // optional selector which element to inspect\\n      element: \'#root\',\\n      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)\\n      config: {},\\n      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)\\n      options: {},\\n    },\\n  }\\n};\\n\\naddParameters({\\n  viewport: {\\n    viewports: INITIAL_VIEWPORTS,\\n  },\\n});\\n\\n\\n\\nexport const Map = () => (\\n  \\n\\n  \\n  <div style={{ height: \\"100vh\\", width: \\"100%\\" }}>\\n    <GoogleMap\\n      bootstrapURLKeys={{ key: \\"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk\\" }}\\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\\n      defaultZoom={10}\\n    ></GoogleMap>\\n  </div>\\n);\\n\\nexport const MapMarker = () => {\\n  const defaultValue1 = \'#ff00ff\';\\n  const defaultValue2 = \'#00ffff\';\\n\\nconst value1 = color(\'Color\', defaultValue1, \'GROUP-ID1\');\\nconst value2 = color(\'Color\', defaultValue2, \'GROUP-ID2\');\\n  return(\\n  <div style={{ height: \\"100vh\\", width: \\"100%\\" }}>\\n    <GoogleMap\\n      bootstrapURLKeys={{ key: \\"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk\\" }}\\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\\n      defaultZoom={10}\\n      onClick={action(\\"map-clicked\\")}\\n    >\\n      <CustomMarker\\n        id=\\"-1\\"\\n        key=\\"-1\\"\\n        lat=\\"-17.942100\\"\\n        lng=\\"177.742345\\"\\n        color={`${value1}`}\\n        disabled=\\"true\\"\\n        onClick={action(\\"marker1-clicked\\")}\\n      />\\n      <CustomMarker\\n        id=\\"0\\"\\n        key=\\"0\\"\\n        lat=\\"-17.842100\\"\\n        lng=\\"178.142345\\"\\n        color={`${value2}`}\\n        disabled=\\"false\\"\\n        onClick={action(\\"marker2-clicked\\")}\\n      />\\n    </GoogleMap>\\n  </div>\\n  )\\n};\\n\\n\\n";\n// @ts-ignore\nvar __ADDS_MAP__ = {"map--map":{"startLoc":{"col":19,"line":44},"endLoc":{"col":1,"line":55},"startBody":{"col":19,"line":44},"endBody":{"col":1,"line":55}},"map--map-marker":{"startLoc":{"col":25,"line":57},"endLoc":{"col":1,"line":92},"startBody":{"col":25,"line":57},"endBody":{"col":1,"line":92}}};\n// @ts-ignore\nvar __MAIN_FILE_LOCATION__ = "/App.stories.js";\n// @ts-ignore\nvar __MODULE_DEPENDENCIES__ = [];\n// @ts-ignore\nvar __LOCAL_DEPENDENCIES__ = {};\n// @ts-ignore\nvar __IDS_TO_FRAMEWORKS__ = {};\n        \nimport React from "react";\nimport PropTypes from \'prop-types\';\nimport { action } from \'@storybook/addon-actions\';\nimport GoogleMap, { infoWindow } from "google-map-react";\nimport CustomMarker from "./components/CustomMarker";\nimport { withKnobs, text, color, number } from "@storybook/addon-knobs";\nimport { addParameters } from \'@storybook/react\';\nimport { INITIAL_VIEWPORTS } from \'@storybook/addon-viewport\';\nimport { addDecorator } from \'@storybook/react\';\nimport { withConsole } from \'@storybook/addon-console\';\nimport { withA11y } from \'@storybook/addon-a11y\';\n\n\n\n\nexport default {\n  title: "Map",\n  component: GoogleMap,\n  decorators: [withA11y, withKnobs],\n  parameters: {"storySource":{"source":"import React from \\"react\\";\\nimport PropTypes from \'prop-types\';\\nimport { action } from \'@storybook/addon-actions\';\\nimport GoogleMap, { infoWindow } from \\"google-map-react\\";\\nimport CustomMarker from \\"./components/CustomMarker\\";\\nimport { withKnobs, text, color, number } from \\"@storybook/addon-knobs\\";\\nimport { addParameters } from \'@storybook/react\';\\nimport { INITIAL_VIEWPORTS } from \'@storybook/addon-viewport\';\\nimport { addDecorator } from \'@storybook/react\';\\nimport { withConsole } from \'@storybook/addon-console\';\\nimport { withA11y } from \'@storybook/addon-a11y\';\\n\\n\\n\\n\\nexport default {\\n  title: \\"Map\\",\\n  component: GoogleMap,\\n  decorators: [withA11y, withKnobs],\\n  parameters: {\\n    backgrounds: [\\n      { name: \'twitter\', value: \'#00aced\', default: true },\\n      { name: \'facebook\', value: \'#3b5998\' },\\n    ],\\n    a11y: {\\n      // optional selector which element to inspect\\n      element: \'#root\',\\n      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)\\n      config: {},\\n      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)\\n      options: {},\\n    },\\n  }\\n};\\n\\naddParameters({\\n  viewport: {\\n    viewports: INITIAL_VIEWPORTS,\\n  },\\n});\\n\\n\\n\\nexport const Map = () => (\\n  \\n\\n  \\n  <div style={{ height: \\"100vh\\", width: \\"100%\\" }}>\\n    <GoogleMap\\n      bootstrapURLKeys={{ key: \\"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk\\" }}\\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\\n      defaultZoom={10}\\n    ></GoogleMap>\\n  </div>\\n);\\n\\nexport const MapMarker = () => {\\n  const defaultValue1 = \'#ff00ff\';\\n  const defaultValue2 = \'#00ffff\';\\n\\nconst value1 = color(\'Color\', defaultValue1, \'GROUP-ID1\');\\nconst value2 = color(\'Color\', defaultValue2, \'GROUP-ID2\');\\n  return(\\n  <div style={{ height: \\"100vh\\", width: \\"100%\\" }}>\\n    <GoogleMap\\n      bootstrapURLKeys={{ key: \\"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk\\" }}\\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\\n      defaultZoom={10}\\n      onClick={action(\\"map-clicked\\")}\\n    >\\n      <CustomMarker\\n        id=\\"-1\\"\\n        key=\\"-1\\"\\n        lat=\\"-17.942100\\"\\n        lng=\\"177.742345\\"\\n        color={`${value1}`}\\n        disabled=\\"true\\"\\n        onClick={action(\\"marker1-clicked\\")}\\n      />\\n      <CustomMarker\\n        id=\\"0\\"\\n        key=\\"0\\"\\n        lat=\\"-17.842100\\"\\n        lng=\\"178.142345\\"\\n        color={`${value2}`}\\n        disabled=\\"false\\"\\n        onClick={action(\\"marker2-clicked\\")}\\n      />\\n    </GoogleMap>\\n  </div>\\n  )\\n};\\n\\n\\n","locationsMap":{"map--map":{"startLoc":{"col":19,"line":44},"endLoc":{"col":1,"line":55},"startBody":{"col":19,"line":44},"endBody":{"col":1,"line":55}},"map--map-marker":{"startLoc":{"col":25,"line":57},"endLoc":{"col":1,"line":92},"startBody":{"col":25,"line":57},"endBody":{"col":1,"line":92}}}},\n    backgrounds: [\n      { name: \'twitter\', value: \'#00aced\', default: true },\n      { name: \'facebook\', value: \'#3b5998\' },\n    ],\n    a11y: {\n      // optional selector which element to inspect\n      element: \'#root\',\n      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)\n      config: {},\n      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)\n      options: {},\n    },\n  },};\n\naddParameters({\n  viewport: {\n    viewports: INITIAL_VIEWPORTS,\n  },\n});\n\n\n\nexport const Map = addSourceDecorator(() => (\n  \n\n  \n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n    ></GoogleMap>\n  </div>\n), {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\n\nexport const MapMarker = addSourceDecorator(() => {\n  const defaultValue1 = \'#ff00ff\';\n  const defaultValue2 = \'#00ffff\';\n\nconst value1 = color(\'Color\', defaultValue1, \'GROUP-ID1\');\nconst value2 = color(\'Color\', defaultValue2, \'GROUP-ID2\');\n  return(\n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n      onClick={action("map-clicked")}\n    >\n      <CustomMarker\n        id="-1"\n        key="-1"\n        lat="-17.942100"\n        lng="177.742345"\n        color={`${value1}`}\n        disabled="true"\n        onClick={action("marker1-clicked")}\n      />\n      <CustomMarker\n        id="0"\n        key="0"\n        lat="-17.842100"\n        lng="178.142345"\n        color={`${value2}`}\n        disabled="false"\n        onClick={action("marker2-clicked")}\n      />\n    </GoogleMap>\n  </div>\n  )\n}, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});\n\n\n',locationsMap:{"map--map":{startLoc:{col:19,line:65},endLoc:{col:139,line:76},startBody:{col:19,line:65},endBody:{col:139,line:76}},"map--map-marker":{startLoc:{col:25,line:78},endLoc:{col:139,line:113},startBody:{col:25,line:78},endBody:{col:139,line:113}}}}},Object(defineProperty.a)(_parameters,"storySource",{source:'import React from "react";\nimport PropTypes from \'prop-types\';\nimport { action } from \'@storybook/addon-actions\';\nimport GoogleMap, { infoWindow } from "google-map-react";\nimport CustomMarker from "./components/CustomMarker";\nimport { withKnobs, text, color, number } from "@storybook/addon-knobs";\nimport { addParameters } from \'@storybook/react\';\nimport { INITIAL_VIEWPORTS } from \'@storybook/addon-viewport\';\nimport { addDecorator } from \'@storybook/react\';\nimport { withConsole } from \'@storybook/addon-console\';\nimport { withA11y } from \'@storybook/addon-a11y\';\n\n\n\n\nexport default {\n  title: "Map",\n  component: GoogleMap,\n  decorators: [withA11y, withKnobs],\n  parameters: {\n    backgrounds: [\n      { name: \'twitter\', value: \'#00aced\', default: true },\n      { name: \'facebook\', value: \'#3b5998\' },\n    ],\n    a11y: {\n      // optional selector which element to inspect\n      element: \'#root\',\n      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)\n      config: {},\n      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)\n      options: {},\n    },\n  }\n};\n\naddParameters({\n  viewport: {\n    viewports: INITIAL_VIEWPORTS,\n  },\n});\n\n\n\nexport const Map = () => (\n  \n\n  \n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n    ></GoogleMap>\n  </div>\n);\n\nexport const MapMarker = () => {\n  const defaultValue1 = \'#ff00ff\';\n  const defaultValue2 = \'#00ffff\';\n\nconst value1 = color(\'Color\', defaultValue1, \'GROUP-ID1\');\nconst value2 = color(\'Color\', defaultValue2, \'GROUP-ID2\');\n  return(\n  <div style={{ height: "100vh", width: "100%" }}>\n    <GoogleMap\n      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}\n      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}\n      defaultZoom={10}\n      onClick={action("map-clicked")}\n    >\n      <CustomMarker\n        id="-1"\n        key="-1"\n        lat="-17.942100"\n        lng="177.742345"\n        color={`${value1}`}\n        disabled="true"\n        onClick={action("marker1-clicked")}\n      />\n      <CustomMarker\n        id="0"\n        key="0"\n        lat="-17.842100"\n        lng="178.142345"\n        color={`${value2}`}\n        disabled="false"\n        onClick={action("marker2-clicked")}\n      />\n    </GoogleMap>\n  </div>\n  )\n};\n\n\n',locationsMap:{"map--map":{startLoc:{col:19,line:44},endLoc:{col:1,line:55},startBody:{col:19,line:44},endBody:{col:1,line:55}},"map--map-marker":{startLoc:{col:25,line:57},endLoc:{col:1,line:92},startBody:{col:25,line:57},endBody:{col:1,line:92}}}}),Object(defineProperty.a)(_parameters,"backgrounds",[{name:"twitter",value:"#00aced",default:!0},{name:"facebook",value:"#3b5998"}]),Object(defineProperty.a)(_parameters,"a11y",{element:"#root",config:{},options:{}}),_parameters)};Object(client.addParameters)({viewport:{viewports:preview.INITIAL_VIEWPORTS}});var Map=addSourceDecorator(addSourceDecorator((function(){return react_default.a.createElement("div",{style:{height:"100vh",width:"100%"}},react_default.a.createElement(lib_default.a,{bootstrapURLKeys:{key:"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk"},defaultCenter:{lat:-17.8181,lng:177.952345},defaultZoom:10}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/App.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/App.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),MapMarker=addSourceDecorator(addSourceDecorator((function(){var value1=Object(addon_knobs_dist.color)("Color","#ff00ff","GROUP-ID1"),value2=Object(addon_knobs_dist.color)("Color","#00ffff","GROUP-ID2");return react_default.a.createElement("div",{style:{height:"100vh",width:"100%"}},react_default.a.createElement(lib_default.a,{bootstrapURLKeys:{key:"AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk"},defaultCenter:{lat:-17.8181,lng:177.952345},defaultZoom:10,onClick:Object(dist.action)("map-clicked")},react_default.a.createElement(components_CustomMarker,{id:"-1",key:"-1",lat:"-17.942100",lng:"177.742345",color:"".concat(value1),disabled:"true",onClick:Object(dist.action)("marker1-clicked")}),react_default.a.createElement(components_CustomMarker,{id:"0",key:"0",lat:"-17.842100",lng:"178.142345",color:"".concat(value2),disabled:"false",onClick:Object(dist.action)("marker2-clicked")})))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/App.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/App.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},472:function(module,exports,__webpack_require__){__webpack_require__(473),__webpack_require__(616),__webpack_require__(617),__webpack_require__(1261),module.exports=__webpack_require__(1262)},535:function(module,exports){}},[[472,1,2]]]);
//# sourceMappingURL=main.8e15e4d8d881469c3285.bundle.js.map