<?php

namespace App\Http\Controllers;

use App\Task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class TaskController extends Controller{

    /**
     * show all tasks
     * @return tasks
     */
    public function index(){

        $Tasks  = Task::all();

        return response()->json($Tasks);

    }

    /**
     * show task
     * @param  $id
     * @return task
     */
    public function getTask($id){

        $Task  = Task::find($id);

        return response()->json($Task);
    }

    /**
     * create task
     * @param  Request $request
     * @return task
     */
    public function createTask(Request $request){

        $Task = Task::create($request->all());

        return response()->json($Task);

    }

    /**
     * remove task
     * @param  $id
     * @return task
     */
    public function deleteTask($id){
        $Task  = Task::find($id);
        $Task->delete();

        return response()->json($Task);
    }

    /**
     * update task
     * @param  Request $request
     * @param  $id
     * @return task
     */
    public function updateTask(Request $request,$id){
        $Task  = Task::find($id);
        $Task->name = $request->input('name');
        $Task->project = $request->input('project');
        $Task->percentage = $request->input('percentage');
        $Task->status = $request->input('status');
        $Task->order = $request->input('order');
        $Task->save();

        return response()->json($Task);
    }

}
