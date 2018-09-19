package com.gms.web.generic;

import java.util.Arrays;
import java.util.List;

/*
Generic은 타입을 생성 하는 것이다.
class Member{} -> static 상태로 Member타입을 생성
List<Member>
Dynamic한 타입생성과 대치된다.
만화를 보느냐 애니메이션을 보느냐의 차이가 있다.
setter 와 getter의 시대가 끝났다.

왜쓰나?
- 캐스팅 안하려고
 */

public class GenericIntro {
	@SuppressWarnings("static-access")
    public static void main(String[] args) {
        System.out.println("=========[1]==========");
        Item<String> itName = new Item<>();
        itName.setOne("갤노트");
        Item<Integer> itVers = new Item<>();
        itVers.setOne(9);
        System.out.println("삼성 신상폰 이름은 :: \n" +
                itName.getOne()+itVers.getOne());
        System.out.println("===========[2]==========");
        Item<List<String>> it = new Item<>();
        it.setSome(Arrays.asList(
                new String[] {"Hello","World","Generic"}));
        System.out.println(it.getSome());
        System.out.println("=========[3]=========");
        FruitBox<Fruit> fbox = new FruitBox<>();
        FruitBox<Fruit> abox = new FruitBox<>();
        fbox.add(new Apple());
        fbox.add(new Grape());
        abox.add(new Apple());
        abox.add(new Apple());
        System.out.println(new Mixer().makeJuice(fbox));
        System.out.println(new Mixer().makeJuice(abox));
    }
}