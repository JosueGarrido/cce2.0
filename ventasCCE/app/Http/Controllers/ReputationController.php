<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product;
use App\Reputation;
use App\User;
use App\Http\Resources\Reputation as ReputationResource;
use App\Http\Resources\ReputationCollection;
use Illuminate\Http\Request;

class ReputationController extends Controller
{
    private static $rules =[
        'score' => 'required',
        'comment' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index(User $user)
    {
        return response()->json(ReputationResource::collection($user->reputation->sortByDesc('created_at')), 200);
    }
    public function show(Reputation $id)
    {
        $this->authorize('view', $id);
        return response()->json( new ReputationResource($id), 200);
    }

    public function store(Request $request, Product $user)
    {
        $request->validate([
            'score' => 'required|int',
            'comment' => 'required|string',
        ]);

        $reputation = $user->reputation()->save(new Reputation($request->all()));

        return response()->json(new ReputationResource($reputation), 201);

    }

    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $reputation = Reputation::findOrFail($id);
        $reputation->update($request->all());
        return $reputation;
    }
    public function delete(Request $request, $id)
    {
        $reputation = Reputation::findOrFail($id);
        $reputation->delete();
        return 204;
    }
}
