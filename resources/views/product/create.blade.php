@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">{{$title}}</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item"><a href="{{route('product.index')}}">Товары</a></li>
    <li class="breadcrumb-item active">{{$title}}</li>
@endsection
{{-- @TODO не работатают старые значения --}}
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <form action="{{route('product.' . $type, $type === 'update' ? $product->id : null )}}"
                              id="edit-form"
                              method="post" enctype="multipart/form-data">
                            @csrf
                            @if($type === 'update')
                                @method('patch')
                            @endif
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Наименование</label>
                                    <input value="{{old('name') ? old('name') : ($product->name ?? null)}}"
                                           type="text" class="form-control {{ $errors->has('name')?'is-invalid':'' }}"
                                           name="name" placeholder="Наименование">
                                    @if($errors->has('name'))
                                        <div class="alert-danger"> {{ $errors->first('name') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Описание</label>
                                    <input value="{{old('description') ? old('description') : ($product->description ?? null)}}"
                                           class="form-control {{ $errors->has('description')?'is-invalid':'' }}"
                                           type="text" name="description" placeholder="Описание">
                                    @if($errors->has('description'))
                                        <div class="alert-danger"> {{ $errors->first('description') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Контент</label>
                                    <input value="{{old('content') ? old('content') : ($product->content ?? null)}}"
                                           type="text"
                                           class="form-control {{ $errors->has('content')?'is-invalid':'' }}"
                                           name="content" placeholder="Контент">
                                    @if($errors->has('content'))
                                        <div class="alert-danger"> {{ $errors->first('content') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Фото предосмотра</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" name="preview_img"
                                                   value="{{old('preview_img') ? old('preview_img') : ($product->content ?? null)}}"
                                                   class="custom-file-input {{ $errors->has('preview_img')?'is-invalid':'' }}"
                                                   id="exampleInputFile">
                                            <label class="custom-file-label"
                                                   for="exampleInputFile">{{isset($product->preview_img) ? $product->preview_img:'выберите файл'}}
                                            </label>
                                        </div>
                                    </div>
                                    @if($errors->has('preview_img'))
                                        <div class="alert-danger"> {{ $errors->first('preview_img') }}</div>
                                    @endif
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="exampleInputFile">Дополнительные фото</label>
                                        <div class="card card-default">
                                            <div class="card-header">
                                                выберите файл
                                            </div>
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <div class="col-lg-10">
                                                        <div class="btn-group w-75">
                                                            <label class="w-50">
                                                                <input onchange="selectFile(this)"
                                                                       id="multi-input" multiple type="file"
                                                                       name="images[]" hidden/>
                                                                <span class="btn btn-success col"
                                                                      id="input-file-replacer">
                                                                    <i class="fas fa-plus mr-1"></i>Выбрать файл
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="added-file">
                                                            @if($product ?? null)
                                                                @foreach($product->images as $key => $item)
                                                                    <div id="blade{{$item->image->id}}"
                                                                         class="added-file-item d-flex justify-content-between"
                                                                         style="margin-top: 10px">
                                                                        <img id="img" style="height: 80px"
                                                                             src="{{'/storage/'.$item->image->path}}"
                                                                             alt="">
                                                                        <a key="blade{{$item->image->id}}"
                                                                           imgId="{{$item->image->id}}"
                                                                           onclick="deleteImage(this)"
                                                                           class="btn btn-danger mr-1 mt-10 h-50">Удалить</a>
                                                                    </div>
                                                                @endforeach
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Цена</label>
                                    <input id="product-price-mask"
                                           value="{{old('price') ? old('price') : ($product->price ?? null)}}"
                                           type="text" class="form-control {{ $errors->has('price')?'is-invalid':'' }}"
                                           name="price" placeholder="Цена">
                                    @if($errors->has('price'))
                                        <div class="alert-danger"> {{ $errors->first('price') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Количество</label>
                                    <input id="product-count-mask"
                                           value="{{old('count') ? old('count') : ($product->count ?? null)}}"
                                           type="text" class="form-control {{ $errors->has('count')?'is-invalid':'' }}"
                                           name="count" placeholder="Количество">
                                    @if($errors->has('count'))
                                        <div class="alert-danger"> {{ $errors->first('count') }}</div>
                                    @endif
                                </div>
                                <div class="custom-control custom-checkbox mb-1">
                                    <input value="1"
                                           class="custom-control-input {{ $errors->has('is_active')?'is-invalid':'' }}"
                                           name="is_active" type="checkbox" id="customCheckbox2"
                                    @if (isset($product->is_active))
                                        {{ !$product->is_active ?: 'checked=""' }}
                                            @elseif(old('is_active'))
                                        {{ old('is_active') === '1' ? 'checked=""' : '' }}
                                            @endif
                                    >
                                    <label for="customCheckbox2" class="custom-control-label">Активность</label>
                                    @if($errors->has('is_active'))
                                        <div class="alert-danger"> {{ $errors->first('is_active') }}</div>
                                    @endif
                                </div>
                                <div class="custom-control custom-checkbox mb-2">
                                    <input value="1"
                                           class="custom-control-input {{ $errors->has('is_deleted')?'is-invalid':'' }}"
                                           name="is_deleted" type="checkbox" id="customCheckbox22"
                                    @if (isset($product->is_deleted))
                                        {{ !$product->is_deleted ?: 'checked=""' }}
                                            @elseif(old('is_deleted'))
                                        {{ old('is_deleted') === '1' ? 'checked=""' : '' }}
                                            @endif
                                    >
                                    <label for="customCheckbox22" class="custom-control-label">Удален</label>
                                    @if($errors->has('is_deleted'))
                                        <div class="alert-danger"> {{ $errors->first('is_deleted') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Категория</label>
                                    <select class="select2 {{ $errors->has('category_id')?'is-invalid':'' }}"
                                            name="category_id"
                                            data-placeholder="Выберите категорию" style="width: 100%;">
                                        @foreach($categories as $category)
                                            <option {{(old('category_id') === $category->id ? 'selected' : '' ) ?? (!isset($product->count)?'':$product->count ? 'selected' : '')}}
                                                    value="{{$category->id}}">
                                                {{$category->name}}
                                            </option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('category_id'))
                                        <div class="alert-danger"> {{ $errors->first('category_id') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Тэги</label>
                                    <select name="tags[]" class="select2 {{ $errors->has('tags')?'is-invalid':'' }}"
                                            multiple="multiple" data-placeholder="Выберите тэг"
                                            style="width: 100%;">
                                        @foreach($tags as $tag)
                                            <option value="{{$tag->id}}"
                                            @if(old('tags'))
                                                @foreach(old('tags') as $id){{$id == $tag->id?'selected':''}}@endforeach
                                                    @elseif(isset($product) && $product->tags)
                                                @foreach($product->tags as $item){{$item->tag_id == $tag->id?'selected':''}}@endforeach
                                                    @endif
                                            >{{$tag->name}}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('category_id'))
                                        <div class="alert-danger"> {{ $errors->first('category_id') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Цвет</label>
                                    <select name="colors[]" class="select2 {{ $errors->has('colors')?'is-invalid':'' }}"
                                            multiple="multiple" data-placeholder="Выберите цвет"
                                            style="width: 100%;">
                                        @foreach($colors as $color)
                                            <option value="{{$color->id}}"
                                            @if(old('colors'))
                                                @foreach(old('colors') as $id){{$id==$color->id?'selected':''}}@endforeach
                                                    @elseif(isset($product) && $product->colors)
                                                @foreach($product->colors as $item){{$item->color_id == $color->id?'selected':''}}@endforeach
                                                    @endif
                                            >{{$color->name}}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('category_id'))
                                        <div class="alert-danger"> {{ $errors->first('category_id') }}</div>
                                    @endif
                                </div>
                            </div>
                            <div class="card-footer">
                                <button onclick="sendForm(event, {{$product->id ?? null}})"
                                        type="submit" class="btn btn-primary mr-1">Сохранить
                                </button>
                                <a href="{{route('product.index')}}" class="btn btn-secondary">Отмена</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>

        /* @TODO завернуть это все в класс ? */
        const dataTransfer = new DataTransfer()
        let itemsNeedDelete = []
        let items = []

        function renderLoaderItem(key, path) {
            const div = document.createElement('div')
            div.innerHTML =
                `<div id="${key}" class="added-file-item d-flex justify-content-between" style="margin-top: 10px">
<img id="img" style="height: 80px" src="${path}" alt="">
<a key="${key}" onclick="deleteImageFromLoader(this)" class="btn btn-danger mr-1 mt-10 h-50">Удалить</a></div>`
            document.querySelector('.added-file').append(div)
        }

        function selectFile(event) {
            Object.values(event.files).forEach((item, index) => {
                const reader = new FileReader();
                const file = event.files[index];
                reader.onload = function (e) {
                    items.push(new File([], e.target.result))
                    renderLoaderItem(e.timeStamp, e.target.result)
                }
                reader.readAsDataURL(file);
                dataTransfer.items.add(file)
            })
            event.files = dataTransfer.files
        }

        function deleteImage(element) {
            const key = element.getAttribute('key')
            itemsNeedDelete.push(element.getAttribute('imgId'))
            document.getElementById(key).remove()
        }

        function deleteImageFromLoader(event) {
            const key = event.getAttribute('key')
            document.getElementById(key).remove()
            items.splice(key, 1)
            const dataTransfer = new DataTransfer();
            items.forEach(el => {
                dataTransfer.items.add(el)
            })
            document.getElementById('multi-input').files = dataTransfer.files
        }

        function sendForm(event, productId) {
            event.preventDefault()
            if (itemsNeedDelete.length > 0) {
                fetch('http://127.0.0.1:8000/api/admin/product/image/delete', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'imgIds': itemsNeedDelete,
                        'productId': productId
                    })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) document.getElementById('edit-form').submit()
                        else alert('Что то пошло не так :(')
                    })
            }
            document.getElementById('edit-form').submit()
        }
    </script>
@endsection