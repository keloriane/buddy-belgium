<?php

class Picz
{
    private static $images = [];

    public static function getAll()
    {
        return Picz::$images;
    }

    public static function add($key, $filename)
    {
		return Picz::$images[$key] = Picz::get($filename);
    }

    private static function get($filename)
    {
        return get_template_directory_uri() . '/public/images/' . $filename;
    }
}

?>
