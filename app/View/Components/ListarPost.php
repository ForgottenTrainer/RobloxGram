<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ListarPost extends Component
{
    public $posts;
    
    //para mapear la variable del compornente deben llamarse igual y asignarla al
    //constructor
    public function __construct($posts)
    {
        $this->posts = $posts;
    }
 

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.listar-post');
    }
}
