package com.gms.web.brd;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/board")
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Article Board;
	@Autowired BoardService boardService;
	@Autowired BoardMapper mapper;
	@RequestMapping("/register")
	public String add(@ModelAttribute("Board") Article Board) {
		logger.info("\n --------- BoardController {} !!--------","add");
		/*BoardService.add(Board);*/
		return "auth:board/listAll.tiles";
	}
	@RequestMapping("/listAll")
	public void list() {}
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve() {}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("Board") Article Board, Model model) {
		logger.info("\n --------- BoardController {} !!--------","modify");
		boardService.modify(Board);
		model.addAttribute("user", boardService.retrieve(Board));
		return "auth:board/retrieve.tiles";
	}
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("Board") Article Board) {
		logger.info("\n --------- BoardController {} !!--------","remove");
		boardService.remove(Board);
		return "redirect:/";
	}
	
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 

}