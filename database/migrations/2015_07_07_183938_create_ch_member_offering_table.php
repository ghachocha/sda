<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChMemberOfferingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ch_member_offering', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('amount');
            $table->integer('member_id');
            $table->integer('is_paid_by_cash');
            $table->integer('is_pledge');
            $table->integer('is_paid_by_cheque');
            $table->integer('is_paid_electronically');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('ch_member_offering');
    }
}
