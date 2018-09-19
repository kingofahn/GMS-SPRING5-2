package com.gms.web.img;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component // bean으로 쓴다는 의미
@Data // getter setter으로 쓴다는 의미
public class Image {
	private String imgseq,
			imgname,
			extension,
			userid;
}