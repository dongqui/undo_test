이전에 말씀드린 미들웨어 간단하게 만들어봤어요!

https://github.com/omnidan/redux-undo/tree/master/examples/todos-with-undo 수정해서 만들었습니다.
/src/redoUndo/redoUndoMiddleware.js 파일 봐주시면 됩니다!

## 개요
1. 액션 타입을 네임스페이스로 구분합니다. 
2. redo undo를 할 수 있는 액션이 들어오면 각각 reducer에 맞는 redo, undo 액션을 생성해 배열에 담습니다.
3. REDO, UNDO(앱 전체에 적용되는 단일 액션 타입)액션이 실행 될 때 마다 커서를 움지이며 커서에 해당하는 액션의 redo, undo(각 리듀서에 정의된 액션 타입)를 리턴합니다.

## 실행
1. npm install
2. npm start

