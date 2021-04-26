<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Web_Link extends JsonResource
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
            'link_type' => $this ->link_type,
            'link_description' => $this ->link_description,


        ];
    }
}
