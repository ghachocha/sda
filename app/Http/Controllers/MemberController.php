<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Member;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new member
     */
    public function create()
    {
        return view('membership.add_member')->with('page_title','Add Member');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $validation = 
        $member = new Member;
        $member->first_name = Input::get('first_name');
        $member->middle_name = Input::get('middle_name');
        $member->last_name = Input::get('last_name');
        $member->gender = Input::get('gender');
        $member->membership_id = Input::get('membership_id');
        $member->physical_address = Input::get('physical_address');
        $member->image_name = Input::get('image_attachment')->getClientName();
        $member->image_size = Input::get('image_attachment')->getClientSize();
        $member->image_extension = Input::get('image_attachment')->getClientExtension();
        $member->save();

        return Redirect::back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
