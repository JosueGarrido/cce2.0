<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnswersCollection;
use App\Http\Resources\AnswersCollection as AnswersResource;
use App\Answers;
use Illuminate\Http\Request;

class AnswersController extends Controller
{
    private static $rules =[
        'answer' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {

        return new AnswersCollection(Answers::paginate (25));
    }
    public function show(Answers $id)
    {
        $this->authorize('view', $id);
        return response()->json( new AnswersResource($id), 200);
    }
    public function store(Request $request)
    {
        //$this->authorize('create', Answers::class);
        $request->validate(self::$rules,self::$messages);
        return Answers::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $answers = Answers::findOrFail($id);
        $answers->update($request->all());
        return $answers;
    }
    public function delete(Request $request, $id)
    {
        $answers = Answers::findOrFail($id);
        $answers->delete();
        return 204;
    }
}
