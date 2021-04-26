<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cultural_Project extends JsonResource
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
            'project_name' => $this ->project_name,
            'project_description' => $this ->project_description,
            'project_type' => $this ->project_type,
            'project_place' => $this ->project_place,

        ];

    }
}
