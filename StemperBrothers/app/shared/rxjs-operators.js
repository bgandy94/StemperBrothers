// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
"use strict";
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9yeGpzLW9wZXJhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7O0FBRXZFLCtCQUErQjtBQUMvQixtRUFBbUU7QUFFbkUsVUFBVTtBQUNWLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUVuQyxZQUFZO0FBQ1osUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLHdDQUF3QyxDQUFDLENBQUE7QUFDaEQsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUNyQyxRQUFPLDZCQUE2QixDQUFDLENBQUEiLCJmaWxlIjoic2hhcmVkL3J4anMtb3BlcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdyeGpzL1J4JzsgLy8gYWRkcyBBTEwgUnhKUyBzdGF0aWNzICYgb3BlcmF0b3JzIHRvIE9ic2VydmFibGVcclxuXHJcbi8vIFNlZSBub2RlX21vZHVsZS9yeGpzL1J4anMuanNcclxuLy8gSW1wb3J0IGp1c3QgdGhlIHJ4anMgc3RhdGljcyBhbmQgb3BlcmF0b3JzIHdlIG5lZWQgZm9yIFRISVMgYXBwLlxyXG5cclxuLy8gU3RhdGljc1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuLy8gT3BlcmF0b3JzXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnOyJdfQ==