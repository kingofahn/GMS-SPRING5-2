package com.gms.web.mbr;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.cmm.Util2;

@RestController
@Controller
@RequestMapping("/member")

public class MemberCtrl {
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired Util2 util2;
	
	@PostMapping("/join")
	public @ResponseBody Map<String,Object> add(@RequestBody Member pm) {
		Util.log.accept("\n --------- join  !!--------");
		Util.log.accept("들어온값 :::" + pm.toString());
		pm.setAge(util2.getAgeAndMember.apply(pm).getAge());
		pm.setGender(util2.getAgeAndMember.apply(pm).getGender());
		Util.log.accept("age :  " + pm.getAge());
		Util.log.accept("gender : " + pm.getGender());
		Map<String,Object> rmap = new HashMap<>();
		return rmap;
	}

	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member pm) {
		Util.log.accept("\n --------- MemberController !!--------");
		Map<String,Object> rm = new HashMap<>();
		Util.log.accept("넘어온 정보: " + pm.toString());
		String pwValid = "WRONG";
		String idValid = "WRONG";
		Util.log.accept("userid : "+ pm.getUserid());
		Util.log.accept("userPassword : "+ pm.getPassword());
		if(mbrMap.count(pm)!=0) {
			idValid = "CORRECT";
			Util.log.accept("ID 유효성체크결과 : " + idValid);
			Function<Member,Member> f=(t)->{
				return mbrMap.get(t);
			};
			mbr = f.apply(pm);
			pwValid =(mbr != null) ?"CORRECT" : "WRONG";
			mbr =(mbr != null)? mbr: new Member() ;
			Util.log.accept("PW 유효성체크결과 : " + pwValid);
		}
		rm.put("ID", idValid);
		rm.put("PW", pwValid);
		rm.put("MBR", mbr);
		return rm;
	}
	
	
	
	@RequestMapping("/list")
	public void list() {}
	
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("member") Member member, Model model) {
		Util.log.accept("\n --------- MemberController  !!--------");
	}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member, 
						@ModelAttribute("user") Member user,
						Model model) {
		Util.log.accept("\n --------- MemberController {} !!--------");
		Util.log.accept("member :" + member.toString());
		member.setUserid(user.getUserid());
		return "public:member/login.tiles";
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("member") Member member,
						@ModelAttribute("user") Member user,
						Model model) {
		Util.log.accept("\n --------- MemberController !!--------");
		member.setUserid(user.getUserid());
		return "redirect:/";
	}
	
	
/*	@PostMapping("/money/")
	public @ResponseBody Map<String,Object>
		money2(@RequestBody Map<String,Object> map){
		Map<String,Object> rmap = new HashMap<>();
		Util.log.accept("넘어온 화폐값: "+map.get("money"));
		rmap.put("test", "축하축하 !!!");
		return rmap;    // 돌아갈 경로를 전혀 신경쓰지 않고 값만 넘긴다. 마이 요요처럼
	}
}
*/
	
	@RequestMapping("/logout")
	public String logout() {
		Util.log.accept("\n --------- MemberController  !!--------");
		return "redirect:/";
	}
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 
}