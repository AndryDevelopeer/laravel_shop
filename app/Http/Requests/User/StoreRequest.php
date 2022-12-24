<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:1024',
            'phone' => 'required|string|max:256|unique:users',
            'email' => 'required|string|max:1024|unique:users',
            'password' => 'required|string|max:1024|confirmed',
            'gender' => 'string|max:24|nullable',
            'age' => 'integer|nullable|regex:/^\d+$/',
            'address' => 'string|max:1024|nullable',
        ];
    }
}
