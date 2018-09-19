package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.mbr.MemberMapper;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(Article p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Article retrieve(Article p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(Article p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void remove(Article p) {
		// TODO Auto-generated method stub
		
	}

}