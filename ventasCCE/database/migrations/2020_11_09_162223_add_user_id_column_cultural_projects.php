<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdColumnCulturalProjects extends Migration
{
    public function up()
    {
        Schema::table('cultural__projects', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('cultural__projects', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
    }
}
