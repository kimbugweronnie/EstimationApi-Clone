const token = jwt.sign(await payload.getPayload(req,res), "secretKey");
