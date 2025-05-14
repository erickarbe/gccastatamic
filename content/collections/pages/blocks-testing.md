---
id: 7a5d9ef8-52f1-4a20-8119-5e2bf984f2ca
blueprint: page
title: 'Blocks Testing'
turn_off_hero: true
author: 916c3785-d212-40bc-89ff-572097ac9582
updated_by: 916c3785-d212-40bc-89ff-572097ac9582
updated_at: 1747080280
blocks:
  -
    id: m9a6mdaq
    eyebrow: 'Testing This Block'
    heading: 'How Does This Centered Content Section Look'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. TESTERRRR'
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'THis is bold.'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'list '
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'list '
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: list
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: italic
            text: Italics
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Heading
    button_text: 'Testing Btn'
    button_link: /
    type: basic_centered_content
    enabled: true
  -
    id: m9a7j5ki
    width: contained
    eyebrow: 'CTA Eyebrow'
    heading: 'This Is A Nice CTA Section'
    content:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
    button_text: 'CTA Button'
    button_link: /
    background_media: 852faedf-7480-4543-bd57-dc1dac085ebd_1_105_c.jpeg
    type: cta_section
    enabled: true
    image_layout: beside_text
    background_color: '#000000'
    image: 2023-brandon-fellows-announcement-featured-image.webp
  -
    id: m9adjftd
    image_left_or_right: left
    content_group:
      eyebrow: 'Image & Text'
      heading: 'Two Column Image and Text Layout'
      content:
        -
          type: paragraph
          content:
            -
              type: text
              text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae pellentesque sem placerat in. Cursus mi pretium tellus duis convallis tempus leo. Aenean sed diam urna tempor pulvinar vivamus fringilla. Nec metus bibendum egestas iaculis massa nisl malesuada. Integer nunc posuere ut hendrerit semper vel class. Taciti sociosqu ad litora torquent per conubia nostra. Himenaeos orci varius natoque penatibus et magnis dis. Montes nascetur ridiculus mus donec rhoncus eros lobortis.'
      button_text: Button
      button_link: /
      content_width: 66
      remove_top_margin: true
    image: 2022-brandon-fellowship-apps-featured-image.webp
    type: image_and_text
    enabled: true
    align_columns: bottom
    constrain_image: true
  -
    id: m9aoervh
    assets_field: slide2.jpg
    type: full_width_media
    enabled: true
  -
    id: m9aqjgva
    accordion_item:
      -
        id: m9aqji0g
        accordion_header: 'testing item'
        accordion_content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_set
        enabled: true
      -
        id: m9aqjxhv
        accordion_header: 'Does this work?'
        accordion_content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_set
        enabled: true
      -
        id: m9aqk464
        accordion_header: 'Faq number three'
        accordion_content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_set
        enabled: true
    type: faq_accordion
    enabled: true
    use_second_column: false
    second_column:
      second_column_content: null
      second_column_width: null
  -
    id: m9bliuom
    content_grid_item:
      -
        id: m9blivxy
        eyebrow: testing
        heading: 'Content Grid'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_item
        enabled: true
      -
        id: m9bljglz
        eyebrow: Hello
        heading: 'Testing Testing'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_item
        enabled: true
      -
        id: m9bljibl
        eyebrow: 'New Square'
        heading: 'How does this grid look?'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
        type: new_item
        enabled: true
      -
        id: m9blk9qi
        eyebrow: 'New Grid'
        heading: 'Another Testing Square'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
        type: new_item
        enabled: true
      -
        id: m9blkqd5
        eyebrow: 'Hello Hello'
        heading: 'Testing Hello'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.'
        type: new_item
        enabled: true
      -
        id: m9bll7x5
        eyebrow: 'Sam Test'
        heading: 'Grid, Testing The Grid'
        content:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
        type: new_item
        enabled: true
    type: content_grid
    enabled: true
    content_grid_title: 'Content Grid'
    content_grid_text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.'
    number_of_columns: three
eyebrow: Testing
inside_hero_header: 'This is a blocks testing page'
inside_hero_content:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
inside_hero_button_text: 'Test Button'
inside_hero_button_link: 'https://artcentergreenville.org/'
inside_hero_image: 2022-brandon-fellowship-apps-featured-image.webp
---
