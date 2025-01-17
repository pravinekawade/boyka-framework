/*
 * MIT License
 *
 * Copyright (c) 2022 Wasiq Bhamla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package com.github.wasiqb.boyka.testng.web.theinternet.pages;

import com.github.wasiqb.boyka.builders.Locator;
import lombok.Getter;
import org.openqa.selenium.By;

/**
 * Checkbox page.
 *
 * @author Wasiq Bhamla
 * @since 05-Aug-2022
 */
@Getter
public class CheckboxPage {
    /**
     * Checkbox page instance.
     *
     * @return Checkbox page instance
     */
    public static CheckboxPage checkboxPage () {
        return new CheckboxPage ();
    }

    private final Locator option1 = Locator.buildLocator ()
        .web (By.cssSelector ("form#checkboxes input"))
        .build ();
    private final Locator option2 = Locator.buildLocator ()
        .web (By.cssSelector ("form#checkboxes input"))
        .index (1)
        .build ();
}
