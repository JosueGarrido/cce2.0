<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoryIdColumnAudiovideoformat extends Migration
{
    public function up()
    {
        Schema::table('audio_video_formats', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('category_level1s')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('audio_video_formats', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });
    }
}
