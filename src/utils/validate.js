const validator = (_, value) => { 
    if(value===true) return Promise.resolve()
    return Promise.reject(new Error("请勾选是否同意"))
}

const rules = {
    mobile: [
        { required: true, message: "手机号必填" },
        {pattern: /^1[3-9]\d{9}$/,message: "手机格式不正确"}
    ],
    code: [
        {required:true, message:"验证码必填"},
],  
    checked: [
        {validator:validator}
    ]
}

export { 
    rules
}