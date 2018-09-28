package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;
import com.gms.web.page.Pagination;

public interface BoardMapper {

  public void create(Board vo);
  public Board read(Integer bno);
  public void update(Board vo);
  public void delete(Integer bno);
  public List<Board> listAll(Pagination p);
  public List<Board> selectUserList(Map<?,?>p);
  public List<Board> listPage(int page);
  public List<Board> listCriteria(Criteria cri);
  public int countPaging(Criteria cri);
  public List<Board> listSearch(SearchCriteria cri);
  public int listSearchCount(SearchCriteria cri);
  public int countAll();
  public int countUserList(Map<?,?>p);
  public void updateReplyCnt(Integer bno, int amount);
  public void updateViewCnt(Integer bno);
  public void addAttach(String fullName);
  public List<String> getAttach(Integer bno);  
  public void deleteAttach(Integer bno);
  public void replaceAttach(String fullName, Integer bno);
  
}
