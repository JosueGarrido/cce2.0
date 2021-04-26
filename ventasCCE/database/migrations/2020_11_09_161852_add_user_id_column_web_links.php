<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdColumnWebLinks extends Migration
{
    public function up()
    {
        Schema::table('web__links', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('web__links', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
    }
}
