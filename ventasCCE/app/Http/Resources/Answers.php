<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Answers extends JsonResource
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
            'answer' => $this ->answer,
            'user_id' => $this ->user_id,
            'question_id' => $this ->question_id,

        ];
    }
}
