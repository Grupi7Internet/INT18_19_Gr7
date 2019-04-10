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

		abstract public function saveToDb();
	}

	

?>