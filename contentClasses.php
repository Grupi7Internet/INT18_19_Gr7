<?php

	abstract class items {
		protected $img;
		protected $title;
		protected $source;

		public function __construct($img,$title,$source){
			$this->img = $img;
			$this->title = $title;
			$this->source = $source;
		}
	}

	class Book extends items {
		private $pages;
		private $author;
		private $rating;
		private $description;


		public function __construct($img,$title,$source,$pages,$author,$rating,$description){
			parent::__construct($img,$title,$source);
			$this->pages = $pages;
			$this->author = $author;
			$this->rating = $rating;
			$this->description = $description;
		}

		public function __get($filed){
			if(property_exists($this, $filed)){
				return $this->$filed;
			}
		}

		public function __set($filed, $value){
			if(property_exists($this, $filed)){
				$this->$filed = $value;
			}
		}


	}


?>