declare function require(filename:string): string;

require("./node_modules/webcomponents.js/webcomponents.js");
require("./style.scss");

import "./src/components/test-component/test-component";
import "./src/components/test-component2/test-component2";
