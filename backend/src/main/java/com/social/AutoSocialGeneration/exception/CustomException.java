package com.social.AutoSocialGeneration.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CustomException extends Exception{
    private Integer code;
    private String message;

    public CustomException(String message, Integer code){
        super(message);
    }
}
