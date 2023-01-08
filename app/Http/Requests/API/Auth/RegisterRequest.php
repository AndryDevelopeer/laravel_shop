<?php

namespace App\Http\Requests\API\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => 'nullable|string|max:512',
            'phone' => 'required|string|max:512',
            'email' => 'nullable|string|max:512',
            'password' => 'required|string|max:512|confirmed',
            'gender' => 'nullable|string|max:512',
            'age' => 'nullable|string|max:3',
            'address' => 'nullable|string|max:1024',
        ];
    }
}
