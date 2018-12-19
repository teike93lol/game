"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs = __importStar(require("rxjs"));
var operators_1 = require("rxjs/operators");
rxjs.of(1, 2, 3).pipe(operators_1.map(function (x) { return x + '!!!'; }));
