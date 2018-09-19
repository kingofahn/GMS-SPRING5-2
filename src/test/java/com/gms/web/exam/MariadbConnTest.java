package com.gms.web.exam;

import static org.junit.Assert.*;

import org.junit.Test;

import com.gms.web.img.MariadbConn;

public class MariadbConnTest {

	@Test
	public void test() {
		MariadbConn m = new MariadbConn();
		assertEquals("A1", m.exam());
	}

}
