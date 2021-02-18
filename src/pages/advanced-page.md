---
title: Sample Advanced Page
sections:
  - type: hero_section
    padding_top: medium
    padding_bottom: medium
    title: This is the Hero Section
    subtitle: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel.
    actions:
      - label: Button
        url: /
        style: button
      - label: Link
        url: /
        style: link
        has_icon: true
        icon: arrow-right
    align: left
    image: images/featured.png
    image_position: right
    background_color: gray
  - type: features_section
    padding_top: medium
    padding_bottom: medium
    title: This is the Features Section
    subtitle: An optional subtitle for the features section
    align: center
    features:
      - title: Feature title One
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        image: images/post-1.jpg
        image_position: right
      - title: Feature title Two
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        image: images/post-2.jpg
        image_position: left
      - title: Feature title Three
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        image: images/post-4.jpg
        image_position: right
    feature_padding_bottom: small
    background_color: none
  - type: form_section
    padding_top: large
    padding_bottom: large
    title: Netlify Form Section
    subtitle: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel.
    align: left
    form_id: contact-form
    form_action: /
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
    background_color: gray
template: advanced
---
