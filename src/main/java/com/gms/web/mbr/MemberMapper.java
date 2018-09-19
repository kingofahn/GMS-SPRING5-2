package com.gms.web.mbr;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
@Repository  // 처음에 component였다가 구현체가 자동으로 만들어지기 때문에 repository로 변경하였다.
public interface MemberMapper {
	public void post(Member p) ;
	public List<?> list(Map<?,?>p) ;
	public Member get(Member p) ;
	public Integer count(Member p) ;
	public void put(Member p) ;
	public void delete(Member p) ;
}