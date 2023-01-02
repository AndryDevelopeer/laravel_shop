<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:2048',
            'content' => 'nullable|string|max:2048',
            'preview_img' => 'nullable|file|max:1024',
            'price' => 'required|string',
            'count' => 'required|string',
            'category_id' => 'integer',
            'is_active' => 'string|max:5',
            'is_deleted' => 'string|max:5',
            'tags' => 'nullable|array',
            'colors' => 'nullable|array',
            'images' => 'nullable|array',
        ];
    }
}
