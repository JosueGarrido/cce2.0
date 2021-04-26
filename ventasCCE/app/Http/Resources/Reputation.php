<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Reputation extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array

     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'score' => $this ->score,
            'comment' => $this ->comment,
            'user_data' => "/api/users/" . $this->user_id,
            'user_id' => $this ->user_id,
            'user2' => "/api/users/" . $this->user_id_2,
            'user_id_2' => $this ->user_id_2,
            'created_at' => $this ->created_at,

        ];
    }
}
