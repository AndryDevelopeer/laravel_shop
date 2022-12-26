@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">{{$title}}</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item"><a href="{{route('product.index')}}">Товары</a></li>
    <li class="breadcrumb-item active">{{$title}}</li>
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
                                    <input value="{{old('name') ?? !isset($product->name)?'':$product->name }}"
                                           type="text" class="form-control {{ $errors->has('name')?'is-invalid':'' }}"
                                           name="name" placeholder="Наименование">
                                    @if($errors->has('name'))
                                        <div class="alert-danger"> {{ $errors->first('name') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Описание</label>
                                    <input value="{{old('description') ?? !isset($product->description)?'':$product->description}}"
                                           class="form-control {{ $errors->has('description')?'is-invalid':'' }}"
                                           type="text" name="description" placeholder="Описание">
                                    @if($errors->has('description'))
                                        <div class="alert-danger"> {{ $errors->first('description') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Контент</label>
                                    <input value="{{old('content') ?? !isset($product->content)?'':$product->content}}"
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
                                                   value="{{old('preview_img')}}"
                                                   class="custom-file-input {{ $errors->has('file')?'is-invalid':'' }}"
                                                   id="exampleInputFile">
                                            <label class="custom-file-label"
                                                   for="exampleInputFile">{{isset($product->preview_img) ?$product->preview_img:'выберите файл'}}
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
                                                <div id="actions" class="row mb-3">
                                                    <div class="col-lg-6">
                                                        <div class="btn-group w-50"><span
                                                                    class="btn btn-success col fileinput-button"><i
                                                                        class="fas fa-plus mr-1"></i><span>Добавить файл</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table table-striped files" id="previews">
                                                    <div id="template" class="row mt-2">
                                                        <div class="col-auto">
                                                            <span class="preview">
                                                                <img src="data:," alt="" data-dz-thumbnail/>
                                                            </span>
                                                        </div>
                                                        <div class="col d-flex align-items-center">
                                                            <p class="mb-0">
                                                                <span class="lead" data-dz-name></span>
                                                                (<span data-dz-size></span>)
                                                            </p>
                                                            <strong class="error text-danger"
                                                                    data-dz-errormessage></strong>
                                                        </div>
                                                        <div class="col-auto d-flex align-items-center">
                                                            <div class="btn-group">
                                                                <button hidden class="btn btn-primary start">
                                                                    <i class="fas fa-upload"></i>
                                                                    <span>Start</span>
                                                                </button>
                                                                <button hidden data-dz-remove
                                                                        class="btn btn-warning cancel">
                                                                    <i class="fas fa-times-circle"></i>
                                                                    <span>Cancel</span>
                                                                </button>
                                                                <button hidden data-dz-remove
                                                                        class="btn btn-danger delete">
                                                                    <i class="fas fa-trash"></i>
                                                                    <span>Delete</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input id="multi-input" multiple type="file" name="images[]" hidden>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Цена</label>
                                    <input id="product-price-mask"
                                           value="{{old('price') ?? !isset($product->price)?'':$product->price}}"
                                           type="text" class="form-control {{ $errors->has('price')?'is-invalid':'' }}"
                                           name="price" placeholder="Цена">
                                    @if($errors->has('price'))
                                        <div class="alert-danger"> {{ $errors->first('price') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Количество</label>
                                    <input id="product-count-mask"
                                           value="{{old('count') ?? !isset($product->count)?'':$product->count}}"
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
                                <button type="submit" class="btn btn-primary mr-1">Сохранить</button>
                                <a href="{{route('category.index')}}" class="btn btn-secondary">Отмена</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            // DropzoneJS Demo Code Start
            Dropzone.autoDiscover = false

            // Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument
            var previewNode = document.querySelector("#template")
            previewNode.id = ""
            var previewTemplate = previewNode.parentNode.innerHTML
            previewNode.parentNode.removeChild(previewNode)

            var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
                url: "/target-url", // Set the url
                thumbnailWidth: 80,
                thumbnailHeight: 80,
                parallelUploads: 20,
                previewTemplate: previewTemplate,
                autoQueue: false, // Make sure the files aren't queued until manually added
                previewsContainer: "#previews", // Define the container to display the previews
                clickable: ".fileinput-button",
                inputId: "multi-input"// Define the element that should be used as click trigger to select files.
            })
            // DropzoneJS Demo Code End
        });
    </script>
@endsection