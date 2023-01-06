<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;

class CreateController extends Controller
{
    public function __invoke()
    {
        $fields = User::getFields();
        $roles = Role::all();
        return view('user.create', compact('fields', 'roles'));
    }
}
