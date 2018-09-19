package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import java.util.function.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class HomeCtrl {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request) {
		model.addAttribute("ctx", Util.ctx.apply(request));
		Util.log.accept("Util.ctx.apply(request)  :::: "+ Util.ctx.apply(request));
		Util.log.accept("\n --------- Welcome Home !! ----------");
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page) {
		Util.log.accept("\n --------- HomeController moce !!--------");
		String path = prefix+":"+dir+"/"+page+".tiles";
		Util.log.accept("\n --------- HomeController moce !!--------"+path);
		return path;
	}
}