znaiSearchData = [["entry@@testing-makes-you-faster-day-one@@tests-are-here-to-speed-you-up","Entry","Testing Makes You Faster Day One","Tests Are Here To Speed You Up","\"I am not writing tests right now as they are going to slow me down\" is one of the most common excuses I heard in the projects I worked on.A lack of test writing experience can make you feel this way, but I think there is another, bigger reason for the perception that tests slow you down. I believe this reason is actually an untapped superpower: the power of exercising any piece of your software in O(1) keystrokes. By O(1) I mean that regardless of how big your application becomes you will always be one button away of seeing the impact of your changes.The superpower of having the tightest feedback loop.Let me try to explain."],["entry@@testing-makes-you-faster-day-one@@building-a-medieval-castle","Entry","Testing Makes You Faster Day One","Building A Medieval Castle","We are going to build a Castle, add features to it, and do a manual inspection of our creation as we go.Let's start small. All we need is a single room and a throne to sit on.Perfect! So let's test it. Quickly get in, walk through the room, sit on the throne. All is good.Let's add a few more rooms and a chest.Our goal is to test if we can open that chest. This time we have to do a little bit more legwork. This time, a simple check took us a few minutes longer.Let's add a bit of security to our castle by adding keys and levers.We have to test each door and to do that we need to go through our entire castle. This makes a good test and a very important one.For our next iteration we decided to add a new smart lock to our chest, so we can open it with our retina.We gotta test this feature. So we open a jar, to pick a key, to open first one door and then to open the other door, to pull the lever, to run the stairs through the opened door. After catching our breath we try to open a chest.A day later, we decide to add an auto lock after three failed attempt. And so we bring a friend who is not registered with our castle to open a jar, to pick a key, to open a door, ... to ..., ..., to try to fail to open a chest.A few iterations later the Security Department expressed the concern that our security could use an upgrade. A trap, puzzle and a dragon later we are ready to deploy.As before, we gotta test every new added Security feature. This is a good test and a very important one. We get caught in a trap, we jump over the trap, we play rock/paper/scissors to lose and to win, open the door, get eaten by the dragon, defeat the dragon and finally reach the chest. All tests passed.Another development iteration passes and we decided to make scissors game to be lefty friendly.And so we bring a friend who is a lefty, can jump over traps, to open a jar, to pick a key, to open a door, to jump over trap, to open a door, to play rock/paper/scissorsA day later we decided to add a fingerprint reader to our chestAnd so we bring another friend who is a lefty, who is not registered with our castle, who can jump over traps, who won't be scared of a dragon, to open a jar, to pick a key, to open a door, to jump over trap, to open a door, to play rock/paper/scissors, to open a lever, to challenge a dragon, to put a finger to a chest.It should be clear by now that the more features we add to the castle, the more time it takes to do a check routine of a single feature. What is interesting is that the big portion of the time is spend getting to the feature we want to test and not the test itself.Having said all that let's add another floor to the castle.There is a new room where you can grab any gear you want and also play a loot box game. Don't worry we won't be running through the castle to test loot box game algorithm (one entire castle run for a single try)Instead, we will create teleports"],["entry@@testing-makes-you-faster-day-one@@teleports-system","Entry","Testing Makes You Faster Day One","Teleports System","Instead of running around the castle, fighting dragons and jumping over traps, wouldn't it be easier to just appear in certain castle places to perform our routines?Let's add a teleport right next to our new loot box game. Next time we tweak loot algorithm we won't run around the castle, we just show up right where we need to be.Regardless of how big our castle will become, regardless of how many more traps and doors we will add between the castle entrance and the loot floor, when we need to tweak and test our loot box algorithm, we just show up right there.Let's add teleports next to more points of interests, so next time when we tweak our features we can test them in an instance.On our first day we only had one room and a throne at the end. But if on the same day we would add a teleport next to the throne - we would already be saving time running through the room.Teleporting would make us faster day one."],["entry@@testing-makes-you-faster-day-one@@implementing-teleports","Entry","Testing Makes You Faster Day One","Implementing Teleports","The castle we have built is your app. And the main entrance is your language main function.One way to build teleports is to implement more than one main file with its own main function. java class ChestTeleport { public static void main() { FingerAuth wrongAuth = new FingerAuth('wrongPerson'); SmartLockChest chest = new Chest(); assert !chest.open(wrongAuth); FingerAuth validAuth = new FingerAuth('validPerson'); SmartLockChest chest = new Chest(); assert chest.open(validAuth)); } } If you do just that it is already going to be a time saver. Any time you want to test a different portion of your castle, you just use a different teleport - a different file to execute.As the number of teleports grow it may become harder to sort through them to pick one to use. Also teleports that are rarely used may become obsolete and point you to non existing parts of your castle.Fortunately most languages have a testing framework to define and structure your teleports. Moreover they will make sure that teleports are still functioning. java class ChestTest { @Test public void invalidFingerAuth() { FingerAuth wrongAuth = new FingerAuth('wrongPerson'); SmartLockChest chest = new Chest(); Assert.assertFalse(chest.open(auth)); } @Test public void validFingerAuth() { FingerAuth validAuth = new FingerAuth('validPerson'); SmartLockChest chest = new Chest(); Assert.assertTrue(chest.open(auth)); } } This is the untapped power of tests I was talking about at the beginning - the power to exercise any piece of your software in one button press. Regardless of how large or small you software is, tweaking your castle and validating it in a matters of seconds using an ever growing system of teleports will make you consistently productive on day one, day two, day hundred and day thousand."],["entry@@testing-makes-you-faster-day-one@@real-life-boring-example","Entry","Testing Makes You Faster Day One","Real Life Boring Example","You probably don't face castles and dragons every day at your work, so let me map it to a boring real life example.Let's add a page to Enterprise Corporate Website. Page will list employees that have birthdays today. List must be in an alphabetic order.Your fire up your IDE, write new page, deploy to DEV environment and test it. All looks good. A minute later you realize that your company doesn't have employees with the same last name that have birthdays on the same day. So how do you test this scenario?You create a SysAdmin Ticket to request WRITE access to DEV database. Wait for approval. Restart the server and check your code.Note: You may say, but hey, I can run my database locally! Sure, but not every big company and not every software has moved on to the greatest tech. And most excuses for not writing tests come from Enterprise engineers working on legacy applications. Plus it helps to make a point.Your code is in production for a month. Everyone is happy, the page is a great success and have many daily visitors. Hence a new request comes up: you need to change the sorting works. text Smith Bo Smith Bob Smith Bobed Smith Al Smith Alice text Smith Alice Smith Al Smith Bobed Smith Bob Smith Bo Basically, still sort alphabetically, but put longer names at the top. It makes page looks better!You fire up your DEV to realize the data is gone. You create a SysAdmin Ticket to request WRITE access to DEV database. Wait for approval. Restart the server and start coding.Let's rewind and try again. Instead of jumping to deploy and database manipulations, let's build a teleport. java class EmployeesSorterTest { @Test public void matchingLastName() { EmployeesList list = new EmployeesList(); list.add(\"Smith\", \"Bobed\"); list.add(\"Smith\", \"Alice\"); list.add(\"Smith\", \"Al\"); list.add(\"Smith\", \"Bob\"); EmployeesSorter employeesSorter = new EmployeesSorter(); EmployeesList sorted = employeesSorter.sort(list); Assert.assertEqual(\"Alice\", sorted.get(0).getFirstName()); Assert.assertEqual(\"Al\", sorted.get(1).getFirstName()); Assert.assertEqual(\"Bobed\", sorted.get(2).getFirstName()); Assert.assertEqual(\"Bob\", sorted.get(3).getFirstName()); } } Whether you implement EmployeesSorterTest first or EmployeesSorter is not that important to me.What important is you have a very tight feedback loop between your changes and the result. You bypass database admins (ahem, dragon, ahem, JK), web pages, internal auth systems and get straight to the business logic at hand."],["entry@@testing-makes-you-faster-day-one@@summary","Entry","Testing Makes You Faster Day One","Summary","Having a tight feedback loop is important for being efficient engineer.Tests are your teleports into any part of your application.Tests make you fast."],["entry@@protect-your-future-self-by-encapsulating-test-input-preparation@@tests-brittleness-and-verbosity-slows-you-down","Entry","Protect Your Future Self By Encapsulating Test Input Preparation","Tests Brittleness and Verbosity slows you down","In entry/testing-makes-you-faster-day-one Testing Makes You Faster Day one article I claimed that writing tests makes you faster. However, there are test patterns that most likely will slow you down and you need to be ready to handle them.Writing tests for a simple logic with a simple input is a breeze. Take for example a test for a simple calculator class. Two numeric inputs and we are done: package com.example.portfolio; import org.junit.Assert; import org.junit.Test; public class SimpleCalculatorTest { @Test public void zeroMultiply() { SimpleCalculator simpleCalculator = new SimpleCalculator(); Assert.assertEquals(0, simpleCalculator.multiply(100.0, 0.0), 0.0); Assert.assertEquals(0, simpleCalculator.multiply(100.0, 0.0), 0.0); } } However real apps require real domain, and real domain is rarely represented by a couple of numbers. Let's take Finance as an example. It is full of types with multiple fields such as Transaction , and it has a lot of business logic.One example of such business logic is ProfitCalculator . Its job is to calculate profit based on the executed Transactions .After consulting with the business people, we are ready to give our implementation a shot. Transaction is a data class with a few fields (number of fields is reduced for simplicity). package com.example.portfolio; import javax.persistence.Entity; import javax.persistence.Id; @Entity public class Transaction { private String id; private double lot; private double price; private String symbol; @Id public String getId() { return id; } public void setId(String id) { this.id = id; } public double getLot() { return lot; } public void setLot(double lot) { this.lot = lot; } public double getPrice() { return price; } public void setPrice(double price) { this.price = price; } public String getSymbol() { return symbol; } public void setSymbol(String symbol) { this.symbol = symbol; } } Here is our first ProfitCalculator implementation, ready to be tested. package com.example.portfolio; import java.util.List; public class ProfitCalculator { public ProfitCalculator() { } public double calculate(List<Transaction> transactions) { return 0; } } And here is the first version of our test. package com.example.portfolio; import org.junit.Test; import java.util.Arrays; import static org.junit.Assert.assertEquals; public class ProfitCalculatorWithoutEncapsulationTest { private ProfitCalculator profitCalculator = new ProfitCalculator(); @Test public void profitShouldBeZeroIfNoLotsSet() { Transaction t1 = new Transaction(); t1.setId(\"T1\"); t1.setSymbol(\"SYM.B\"); t1.setLot(0); t1.setPrice(8); Transaction t2 = new Transaction(); t1.setId(\"T2\"); t1.setSymbol(\"SYM.C\"); t1.setLot(0); t1.setPrice(19); assertEquals(0, profitCalculator.calculate(Arrays.asList(t1, t2)), 0); } } This test is already on the verbose side. As requirements for the ProfitCalculator evolve, the number of setters we need to validate new business logic will grow, as will grow the number of instances that we may need to create.Question: But why verbose test can be bad? A verbose test can be bad, because the boilerplate code used to setup the test makes it harder to read intent behind the test.Additionally it may discourage you to write separate test scenario and instead you may want to clump test scenarios together and re-use the test data setup.Test data re-use can lead to a random test being broken as you setup data for an unrelated scenario. Verbosity is not the only potential problem here. The way Transaction instance is being constructed for testing purposes can lead to a maintenance burden.The First iteration of Transaction class uses setters to set the data. A future iteration may switch to using fluent API instead of setters . transaction(\"T1\") .symbol(\"SYM.B\") .lot(0) .price(0); From the ProfitCalculator 's perspective the way Transaction instances are created is irrelevant as it doesn't affect the calculation logic. But refactoring Transaction will break ProfitCalculatorTest . Transaction is going to be used in other tests. As the number of tests that use Transaction instances increases you will be more and more reluctant to do refactoring. All your tests that create Transaction instances are brittle tests now. They are brittle because they won't survive Transaction refactoring.If you ever want to refactor Transaction class you will have two choices:Refactor and waste time fixing tests.Convince yourself that Transaction is good as it is.Neither is a good choice.I want you to have a way to protect your future self by encapsulating test input preparation"],["entry@@protect-your-future-self-by-encapsulating-test-input-preparation@@test-input-initial-encapsulation","Entry","Protect Your Future Self By Encapsulating Test Input Preparation","Test Input Initial Encapsulation","Let's extract Transaction creation code into TestTransactions package com.example.portfolio; import org.junit.Test; import java.util.Arrays; import static com.example.portfolio.TestTransactions.createTransaction; import static org.junit.Assert.assertEquals; public class ProfitCalculatorWithBasicEncapsulationTest { private ProfitCalculator profitCalculator = new ProfitCalculator(); @Test public void profitShouldBeZeroIfNoLotsSet() { Transaction t1 = createTransaction(\"t1\", \"SYM.B\", 0, 8); Transaction t2 = createTransaction(\"t2\", \"SYM.C\", 0, 19); assertEquals(0, profitCalculator.calculate(Arrays.asList(t1, t2)), 0); } } public static Transaction createTransaction(String id, String symbol, double lot, double price) { Transaction transaction = new Transaction(); transaction.setId(id); transaction.setSymbol(symbol); transaction.setLot(lot); transaction.setPrice(price); return transaction; } Less verbosity. A good start.Question: Can you still spot the problem? As we add more properties to Transaction class, some of the tests may need to set extra transaction properties.Additionally some of the properties will be completely irrelevant to the business logic under a test, yet you will be forced to set them anyway."],["entry@@protect-your-future-self-by-encapsulating-test-input-preparation@@test-input-encapsulation-with-webtau-table-data","Entry","Protect Your Future Self By Encapsulating Test Input Preparation","Test Input Encapsulation With Webtau Table Data","I was dealing with test problems like above for years and eventually came up with a solution that fits my needs. I hope it will fit your needs as well. The solution is to use flexible data structure like https://twosigma.github.io/webtau/guide/reference/table-data Webtau TableData package com.example.portfolio; import com.twosigma.webtau.data.table.TableData; import org.junit.Test; import static com.example.portfolio.TestTransactions.createTransactions; import static com.twosigma.webtau.WebTauCore.*; // table and underscores are defined in WebTauCore public class ProfitCalculatorWithTableDataTest { private ProfitCalculator profitCalculator = new ProfitCalculator(); @Test public void profitShouldBeZeroIfNoLotsSet() { TableData transactionsData = table( \"id\", \"symbol\", \"lot\", \"price\", // webtau TableData definition ________________________________, // header and values separator \"t1\", \"SYM.B\" , 0.0 , 8.0, \"t2\", \"SYM.C\" , 0.0 , 19.0); double margin = profitCalculator.calculate(createTransactions(transactionsData)); actual(margin).should(equal(0)); } } Note: https://github.com/twosigma/webtau Webtau open source project started as my answer to common testing problems I encountered. While I am not working at https://www.twosigma.com/ Two Sigma anymore I am still contributing and using it on a regular basis. public static List<Transaction> createTransactions(TableData tableData) { return tableData.rowsStream() .map(row -> { Transaction transaction = new Transaction(); transaction.setId(row.get(\"id\", genTransactionId())); // default value is auto generated transaction.setSymbol(row.get(\"symbol\")); transaction.setLot(row.get(\"lot\", 0.0)); // default value is hardcoded transaction.setPrice(row.get(\"price\", 0.0)); return transaction; }) .collect(toList()); } private static String genTransactionId() { return \"t-id-\" + idCount.incrementAndGet(); } Notice how createTransactions defaults values when they are not present? As a result of this, tests that don't need, say, id or lot are free to ignore them. @Test public void profitShouldBeZeroIfNoLotsSet() { TableData transactionsData = table(\"symbol\", \"lot\", ________________, \"SYM.B\" , 0.0, \"SYM.C\" , 0.0); double margin = profitCalculator.calculate(createTransactions(transactionsData)); actual(margin).should(equal(0)); } If later a new required property will be added to Transaction , you won't have to change all your existing tests. Instead you will update createTransaction with a new default value. The only time you will have to change the tests to use the new property is if the new property is affecting the logic under test.Essentially your test will use as little data to prove logic works as possible.Question: Why it is important to minimize the data in your test? Test is crucial to understanding complex business logicThe more data the harder it to comprehend the logicWe want business people to look at our data sets (stay tuned to see a good way to expose test data to business)"],["entry@@protect-your-future-self-by-encapsulating-test-input-preparation@@try-it-out","Entry","Protect Your Future Self By Encapsulating Test Input Preparation","Try it out","<dependency> <groupId>com.twosigma.webtau</groupId> <artifactId>webtau-core</artifactId> <version>1.18</version> <scope>test</scope> </dependency> https://twosigma.github.io/webtau/guide/ Webtau user guide https://github.com/twosigma/webtau Webtau github"],["entry@@protect-your-future-self-by-encapsulating-test-input-preparation@@summary","Entry","Protect Your Future Self By Encapsulating Test Input Preparation","Summary","Tests input preparation can be verbose and brittle.Identify core domain objects and provide a convenient way to create them.Use as little data as necessary to prove logic correctness. Default the rest."]]
/*
 * Copyright 2019 TWO SIGMA OPEN SOURCE, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

znaiSearchIdx = lunr(function () {
    this.ref('id')
    this.field('section')
    this.field('pageTitle')
    this.field('pageSection')
    this.field('text')

    this.metadataWhitelist = ['position']

    znaiSearchData.forEach(function (e) {
        this.add({
            id: e[0],
            section: e[1],
            pageTitle: e[2],
            pageSection: e[3],
            text: e[4],
        })
    }, this)
})