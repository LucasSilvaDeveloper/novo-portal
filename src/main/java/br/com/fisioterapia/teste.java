package br.com.fisioterapia;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class teste {

	@RequestMapping("/")
	public String principal() {
		return "layout/index1.html";
	}
	
	@RequestMapping
	public String principa1l() {
		return "layout/index1.html";
	}
	
}
