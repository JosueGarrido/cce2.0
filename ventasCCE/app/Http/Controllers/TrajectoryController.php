<?php

namespace App\Http\Controllers;

use App\Trajectory;
use App\Http\Resources\Trajectory as TrajectoryResource;
use App\Http\Resources\TrajectoryCollection;
use Illuminate\Http\Request;


class TrajectoryController extends Controller
{
    private static $rules =[
        'start_date' => 'required',
        'trajectory_description' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {

        return new TrajectoryCollection(Trajectory::paginate (25));
    }
    public function show(Trajectory $id)
    {
        $this->authorize('view', $id);
        return response()->json( new TrajectoryResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Trajectory::class);
        $request->validate(self::$rules,self::$messages);
        return Trajectory::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $trajectories = Trajectory::findOrFail($id);
        $trajectories->update($request->all());
        return $trajectories;
    }
    public function delete(Request $request, $id)
    {
        $trajectories = Trajectory::findOrFail($id);
        $trajectories->delete();
        return 204;
    }
}
