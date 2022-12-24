@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Добавить товар</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item"><a href="{{route('product.index')}}">Товары</a></li>
    <li class="breadcrumb-item active">Добавить товар</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <form action="{{route('product.store')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Наименование</label>
                                    <input value="{{old('name')}}" type="text" class="form-control" name="name"
                                           placeholder="Наименование">
                                    @if($errors->has('name'))
                                        <div class="alert-danger"> {{ $errors->first('name') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Описание</label>
                                    <input value="{{old('description')}}" type="text" class="form-control"
                                           name="description" placeholder="Описание">
                                    @if($errors->has('description'))
                                        <div class="alert-danger"> {{ $errors->first('description') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Контент</label>
                                    <input value="{{old('content')}}" type="text" class="form-control" name="content"
                                           placeholder="Контент">
                                    @if($errors->has('content'))
                                        <div class="alert-danger"> {{ $errors->first('content') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Фото</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" name="preview_img" class="custom-file-input"
                                                   value="{{old('preview_img')}}"
                                                   id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">выберите файл</label>
                                        </div>
                                    </div>
                                    @if($errors->has('preview_img'))
                                        <div class="alert-danger"> {{ $errors->first('preview_img') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Цена</label>
                                    <input value="{{old('price')}}" type="number" class="form-control" name="price"
                                           placeholder="Цена">
                                    @if($errors->has('price'))
                                        <div class="alert-danger"> {{ $errors->first('price') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Количество</label>
                                    <input value="{{old('count')}}" type="number" class="form-control" name="count"
                                           placeholder="Количество">
                                    @if($errors->has('count'))
                                        <div class="alert-danger"> {{ $errors->first('count') }}</div>
                                    @endif
                                </div>
                                <div class="custom-control custom-checkbox mb-1">
                                    <input value="{{old('is_active') ?? '1'}}" class="custom-control-input"
                                           name="is_active"
                                           type="checkbox" id="customCheckbox2" checked="">
                                    <label for="customCheckbox2" class="custom-control-label">Активность</label>
                                    @if($errors->has('is_active'))
                                        <div class="alert-danger"> {{ $errors->first('is_active') }}</div>
                                    @endif
                                </div>
                                <div class="custom-control custom-checkbox mb-2">
                                    <input value="{{old('is_deleted' ?? '1')}}" class="custom-control-input"
                                           name="is_deleted"
                                           type="checkbox" id="customCheckbox22">
                                    <label for="customCheckbox22" class="custom-control-label">Удален</label>
                                    @if($errors->has('is_deleted'))
                                        <div class="alert-danger"> {{ $errors->first('is_deleted') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Категория</label>
                                    <select class="select2" name="category_id"
                                            data-placeholder="Выберите категорию" style="width: 100%;">
                                        @foreach($categories as $category)
                                            <option {{old('category_id') === $category->id ? 'selected' : '' }}
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
                                    <select name="tags[]" class="select2" multiple="multiple"
                                            data-placeholder="Выберите тэг"
                                            style="width: 100%;">
                                        @foreach($tags as $tag)
                                            <option value="{{$tag->id}}">{{$tag->name}}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('category_id'))
                                        <div class="alert-danger"> {{ $errors->first('category_id') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Цвет</label>
                                    <select name="colors[]" class="select2" multiple="multiple"
                                            data-placeholder="Выберите цвет"
                                            style="width: 100%;">
                                        @foreach($colors as $color)
                                            <option value="{{$color->id}}">{{$color->name}}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('category_id'))
                                        <div class="alert-danger"> {{ $errors->first('category_id') }}</div>
                                    @endif
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary mr-1">Сохранить</button>
                                <a href="{{route('category.index')}}" class="btn btn-secondary">Отмена</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection