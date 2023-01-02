@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Цвета</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item active">Цвета</li>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <label for="exampleInputFile">Дополнительные фото</label>
            <div class="card card-default">
                <div class="card-header">
                    выберите файл
                </div>
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-lg-6">
                            <div class="btn-group w-50">
                                <label class="w-50">
                                    <input onchange="selectFile(this)"
                                           id="multi-input" multiple type="file" name="images[]" hidden/>
                                    <span class="btn btn-success col" id="input-file-replacer">
                                        <i class="fas fa-plus mr-1"></i>
                                        Выбрать файл
                                    </span>
                                </label>
                            </div>
                            <div class="added-file">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const multiInput = document.getElementById('multi-input');
        const preview = document.querySelector('.added-file');
        const dataTransfer = new DataTransfer();
        const reader = new FileReader();
        let items = []

        function selectFile(input) {

            /*input.files.forEach(el => {
                dataTransfer.items.add(el)
            })
            input.files = dataTransfer.files*/

            const files = input.files;
            Object.keys(input.files).forEach(i => {
                const reader = new FileReader();
                const file = files[i];
                preview.style.display = 'block'
                reader.onload = function (e) {
                    preview.innerHTML = ''
                    items.push(e.target)
                    items.forEach((el, index) => {
                        const div = document.createElement('div')
                        div.innerHTML =
                            `<div id="${index}" class="added-file-item d-flex justify-content-between" style="margin-top: 10px">
<img id="img" style="height: 80px" src="${el.result}" alt="">
<button key="${index}" onclick="deleteImage(this)" type="submit" class="btn btn-danger mr-1 mt-10 h-50">Удалить</button></div>`
                        preview.append(div)
                    })
                }
                reader.readAsDataURL(file);
            })
        }

        function deleteImage(element) {
            const key = element.getAttribute('key')
            const dataTransfer = new DataTransfer()
            let inputItems = Object.values(multiInput.files)

            document.getElementById(key).remove()
            inputItems.splice(key, 1)

            inputItems.forEach(el => {
                dataTransfer.items.add(el)
            })

            multiInput.files = dataTransfer.files
        }


    </script>
@endsection
